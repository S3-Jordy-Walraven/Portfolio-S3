package com.example.authserver.config;

import com.example.authserver.config.keys.JwkKeys;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.JWKSource;
import com.nimbusds.jose.proc.SecurityContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.OAuth2AuthorizationServerConfiguration;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
import org.springframework.security.oauth2.core.oidc.OidcScopes;
import org.springframework.security.oauth2.server.authorization.client.InMemoryRegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClient;
import org.springframework.security.oauth2.server.authorization.client.RegisteredClientRepository;
import org.springframework.security.oauth2.server.authorization.config.ClientSettings;
import org.springframework.security.oauth2.server.authorization.config.ProviderSettings;
import org.springframework.security.oauth2.server.authorization.config.TokenSettings;
import org.springframework.security.web.SecurityFilterChain;

import java.time.Duration;
import java.util.UUID;

@Configuration
public class AuthorizationServerConfig {

    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public SecurityFilterChain securityASFilterChain(HttpSecurity http) throws  Exception{
        OAuth2AuthorizationServerConfiguration.applyDefaultSecurity(http);
        return  http.formLogin().and().build();
    }

    @Bean
    public RegisteredClientRepository registeredClientRepository(){
    var rc = RegisteredClient.withId(UUID.randomUUID().toString())
                    .clientId("client")
                    .clientSecret("secret")
                    .scope(OidcScopes.OPENID)
                    .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
                    .authorizationGrantType(AuthorizationGrantType.REFRESH_TOKEN)
                    .redirectUri("http://localhost:3000")
            .tokenSettings(TokenSettings.builder().accessTokenTimeToLive(Duration.ofHours(10))
                    .refreshTokenTimeToLive(Duration.ofHours(10))
                    .build())
            .clientSettings(ClientSettings.builder()
                    .requireAuthorizationConsent(true)
                    .build())
            .build();
    return new InMemoryRegisteredClientRepository(rc);
    }


    @Bean
    public ProviderSettings providerSettings(){
        return  ProviderSettings.builder().issuer("http://localhost:8080/oauth2/issuer").build();
    }

    @Bean
    public JWKSource<SecurityContext> jwkSource(){
        RSAKey rsaKey = JwkKeys.generateRSAKey();
        JWKSet set = new JWKSet(rsaKey);
        return (j,sc)-> j.select(set);
    }
}
