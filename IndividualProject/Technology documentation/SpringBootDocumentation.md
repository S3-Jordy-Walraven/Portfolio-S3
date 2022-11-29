# SpringBoot Documentation


## My SpringBoot Endpoints
For my SpringBoot application I have created 2 endpoints so far:
- /api/effects[GET]

  Get all effects from the database

<br>

- /api/effects[POST]
  
  Post a new effect to the database

## Tools used
  -Basic setup [start.spring.io](https://start.spring.io)
  -[IntelliJ IDEA](https://www.jetbrains.com/idea/)
  -[MySql](https://www.mysql.com)

## Setting up a SpringBoot CRUD Api

### Creating application in the spring initializer
  Setting up a basic CRUD api in SpringBoot is very easy. 
  First off navigate to https://start.spring.io
  For this project we will be chosing a Maven project with Java as language
  We will be using spring boot 2.7.4 for this example. Below the version selection fill in a name for you app
  For the java version we will be using the version that has been selected by default in this case java 17.
  
  After setting this up we will be adding the following dependencies:
    -Spring Web
    -Lombok
    -MySql Driver
    -(For now we will not use spring security, but in the future this will be added)
    
  And click generate

  ## Spring boot annotations
  In springboot you will be using a bunch of annotations. These annotations are used to tell springboot what to do with the code. Below you can see a list of the most used annotations in this project:

  - @CrossOrigin
  - @RestController
  - @RequestMapping
  - @GetMapping
  - @PostMapping
  - @PutMapping
  - @DeleteMapping
  - @RequestBody
  - @Valid

  ### @CrossOrigin
  This annotation is used to allow cross origin requests. This means that you can make requests to your api from a different domain. This is very useful if you want to make a frontend for your api. In this project we will be using this annotation to allow requests from the frontend. You can use this annotation on a controller or a method. In this project we will be using it on a controller.

  ### @RestController
  This annotation is used to tell springboot that this class is a controller. This means that this class will be used to handle requests. In this project we will be using this annotation on all controllers.

  ### @RequestMapping
  This annotation is used to tell springboot what the base url of the controller is. For example the EffectController has the following annotation:
  ```java
  @RequestMapping("/api/effects")
  ```
### @GetMapping
This annotation is used to tell springboot that this method is used to handle a get request.

### @PostMapping
This annotation is used to tell springboot that this method is used to handle a post request.

### @PutMapping
This annotation is used to tell springboot that this method is used to handle a put request.

### @DeleteMapping
This annotation is used to tell springboot that this method is used to handle a delete request.

### @RequestBody
This annotation is used to tell springboot that the parameter of the method is the body of the request. This is used to get the data from the request body.

### @Valid
This annotation is used to tell springboot that the parameter of the method needs to be validated. This is used to validate the data from the request body.





 
  
  
  
