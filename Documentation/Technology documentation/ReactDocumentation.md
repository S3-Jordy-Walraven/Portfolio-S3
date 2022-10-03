**React documentation**

**\
React general project setup:**

Project setup in react is very easy. Make sure you have nodejs installed
and after that run "npx create-react-app CHOSENNAME" in the terminal.
This will create a basic template with all the stuff you need.

**Packages used:**

**\
General package information:**

React packages are packages that extend the functionality of react. Down
below you can see some really useful packages. You can install most
react packages with a npm install command. If you run this npm install
command a dependency to this package will be added in the package.json
file. This means that the next time you or someone else runs npm install
the package you added will be installed.

**Packages that I will be describing:**

1.  [React Router](#ReactRouter)

2.  [Bootstrap](#Bootstrap)

3.  [Axios](#Axios)

4.  React-oauth/google



**React router:**

The react router package is a very useful package if you want to add
routing to your react application. This means that it can display
specified components based on the url of you page without refreshing the
page. You can simply install this package by running the following npm
command: "npm i react-router-dom". Below you can see a code snippet of
how to use this package.
```javascript
 <BrowserRouter>

<Routes>

          <Route path="/" element={<AllMeetupsPage />} />

          <Route path="/new-meetup" element={<NewMeetupPage />} />

          <Route path="/favorites" element={<FavoritesPage />} />

  </Routes>

 </BrowserRouter>
```
After adding something like this to your application(Mostly used in
app.js, or index.js). You can change the URL without reloading with some
other components in this package.\
\
The first one is the \<Link\> component, you can use it the same way as
a normal html button, with a slightly different syntax:
```javascript
    <Link to="/" className="btn btn-primary m-5">
        Home
      </Link>
```
The other way to navigate to a different URL without reloading is by
using the react hook, useNavigate. You first need to initialize this
hook

  const navigate = useNavigate();

And after initializing you can use the useNavigate hook like in the code
snippet:
```javascript
     navigate("/");
```



- **Bootstrap package:**

Bootstrap is a very quick and easy styling package that makes it way
faster to style your page. The npm command for this package is: "*npm
install <bootstrap@v5.2.1>*".

You need to have a slightly different syntax in jsx compared to html. To
use bootstrap you add the bootstrap classes to a class tag. But in react
this is called classname. Below is a small code snippet of how you use
it:
 ```javascript
<Link to="/" className="btn btn-danger">

  Cancel

 </Link>
```


- **Axios package**:

Axios is a package that you can use to make http requests. You can also
use fetch, but axios automatically parses the data it receives to a
javascript object, while you need to do this manually in fetch. The
syntax for axios is very easy. Below you can see a code snippet of a get
and post request:
```javascript
getAllEmployees() {

    return axios.get(REST_API_URL);

  }

  createEmployee(employee) {

    return axios.post(REST_API_URL, employee);

  }
```
-  **React-oauth/google**

This package makes signing in with google oauth fairly easy. This
package includes a google login component you can place in your react
app:
```javascript
 <GoogleOAuthProvider clientId="GOOGLE_CLIENTID">

      <GoogleLogin

        buttonText="Sign In with Google"

        onSuccess={(response) => {

        }}

        onFailure={(response) => {

        }}

        isSignedIn={true}

        cookiePolicy={"single_host_origin"}

        useOneTap

        auto_select

      />

    </GoogleOAuthProvider>
```
Want more information check out the [Oauth
documentation](Google%20Oauth.docx) I wrote:
