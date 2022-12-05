# [Sonar cloud](https://sonarcloud.io/)

## What is SonarCloud?
SonarCloud is a cloud-based code quality and security service that continuously analyzes your code to detect bugs, vulnerabilities, and code smells. This service is free for open source projects but costs money on private repositories. 


## How to use SonarCloud
Sonar cloud is very easy to setup. All you have to do is go to their [website](https://sonarcloud.io/). Login with your github account. Sonar cloud will automatically ask you to give it access to your repositories. After doing so your repository will automatically be added to sonar cloud. You can then go to your project and click on the analyze button. This will start the analysis, after which you can view the results. 

## How to use SonarCloud with Github Actions
To use SonarCloud with Github Actions we need to add a new section to our workflow file. This section will look like this:
```yml
    - name: SonarCloud Scan
      uses: SonarSource/sonarcloud-github-action@master
      env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} 
        SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
```

You can get your sonar token by going to your project on sonar cloud and clicking on the analysis method setting. You can then click on github analysis and copy the token from there. 

## sonar-project.properties
To use SonarCloud with Github Actions we also need to add a sonar-project.properties file to our project. This file will look like this:
```properties
sonar.projectKey=S3-Jordy-Walraven_S3-IP-FE-Jordy-Walraven
sonar.organization=s3-jordy-walraven
sonar.javascript.lcov.reportPaths=./s3-frontend/coverage/lcov.info
sonar.coverage.exclusions=**/__tests__/**
```

The project key and orginization can be automatically generated by sonar cloud if you click on the analysis method and follow the gihub actions tutorial. 

The lcov report path is the path to the lcov report that is generated by jest. The coverage exclusions are the files that you don't want to be included in the coverage report.
The lcov report path isnt necessary if you don't want to use coverage in sonar cloud.
