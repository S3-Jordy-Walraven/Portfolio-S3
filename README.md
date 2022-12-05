# Reader's Guide - Jordy Walraven - S3
</hr>

## Table of content
1. Introduction
2. Learning outcomes
3. Individual project
4. Group project
5. Researches



## 1. Introduction
<hr>
This portfolio contains everything I have worked on in semester 3. To guide you through this portfolio I made this README file. 
In this portfolio I will go over the learning outcomes and how I will achieve them during this semester.


## 2.Learning outcomes
<hr>

| Index | Learning outcome                 | Description   |
|-------| -----------------                | ------------- |
|   1   | [Web application](#web-application)                  | You design and build user-friendly, full-stack web applications |
|   2   | [Software quality](#software-quality)                 | You use software tooling and methodology that continuously monitors and improve the software quality during software development|
|   3   | [Agile method](#agile-method)                     | You choose and implement the most suitable agile software development method for your software project  |
|   4   | CI/CD                            | You design and implement a (semi)automated software release process that matches the needs of the project context |
|   5   | Cultural differences and ethics  | You recognize and take into account cultural differences between project stakeholders and ethical aspects in software development  |
|   6   | [Requirements and design](#requirements-and-design)          | You analyze (non-functional) requirements, elaborate (architectural) designs and validate them using multiple types of test techniques             |
|   7   | Business processes               | You analyze and describe simple business processes that are related to your project  |
|   8   | [Professional](#professional)                     | You act in a professional manner during software development and learning  |

## 3.Individual Project
<hr>
<h1 align="center">
  Signify
  <br>
</h1>
<h4 align="center">
The effect marketplace for user made effects
</h4>
<br>

Signify is a web app where people can upload their own SignalRGB effects. For context, SignalRGB is an application that controls the RGB of many different brands in one software. In SignalRGB you can make your own effects with javascript. The community makes a bunch of effects, but the majority of them never show up in SignalRGB, because SignalRGB has a strict verification process before something gets shown in SignalRGB. That’s why I want to make a Web App where people can upload their own effects, without first having to go through the verification process, this will make it way more accessible to a bunch of creators.

So now for the feature description, effect creators should be able to register their own account and upload their own effects without having strict effect restrictions. On the main page users should be able to see these effects and be able to download them for use in SignalRGB. Logged in users should also be able to favorite the effects they like, so they can easily see if an effect has a new update. Based on downloads and favorites the most popular integrations will show up first on the main page. Users should also be able to preview the effects before they download them.
<br/>

### User Stories
The user stories are written in a seperate file, you can find them [here](./IndividualProject/UserStories.md)

<h3>Projects</h3>
You can find the application in the following 2 repositories:

- [FrontEnd](https://github.com/S3-Jordy-Walraven/S3-IP-FE-Jordy-Walraven)
- [Backend](https://github.com/S3-Jordy-Walraven/S3-IP-BE-Jordy-Walraven)


### Web application
For this web application I did research to distributed systems and microservices. For my frontend i'm using [React](https://reactjs.org) and im using [SpringBoot](https://spring.io/projects/spring-boot) as backend. Before this semester I had never worked with react, springboot and distributed systems. 

I am using a javascript framework, because I heard a lot of positive things about them. I chose for springboot, because I wanted to try something new. The first 2 semesters were all c# so I wanted to try a new language. 

You can find more documentation about my Application in the following files:
- [React documentation](IndividualProject/Technology%20documentation/ReactDocumentation.md)
- [Google Oauth documentation](IndividualProject/Technology%20documentation/GoogleOauth.md)
- [Springboot documentation](IndividualProject/Technology%20documentation/SpringbootDocumentation.md)
### Software quality

#### Authentication 
To have a secure login I decided to use a microservice for login. I went with the Google [OAUTH2](https://oauth.net/2/) login service. Because I am using an external service I'm not responsible for login, this means it is way more secure than an own implementation. 

#### Code reviews
To make sure code is always up to par I always ask someone else to double check my code to see if im not pushing anything that isn't supposed to be there. This you can especially see in the research projects as we've used git flow for this. This means that everyone works on a seperate feature branch to not slow someone else down. But because we work seperately from eachother we need to make sure that merging happens securely without messing anything up. 

We did this by protecting the development and main branch, so someone always has to review your code before it gets merged onto these branches. This protection also stops direct pushed to these branches. To savely merge our code we used pull requests. Before we can merge the pull request onto the development or main branch the code first needs to be accepted by someone else. If something is wrong the person reviewing your code can also add comments and ask you to make changes.

### Professional
For the research projects we divided the research into a main question and multiple sub questions. This way we could divide the work and everyone could work on a part of the research. This way we could also work with git flow and everyone could work on a seperate branch. We made a new feature branch for every sub question. Because we used feature branches we were never slowing eachother down and we could work on our own pace. When someone was done with a sub question they could make a pull request and ask someone else to review their code. This way we could make sure that the code was always up to par. 

To track the process of the research we made issues in github, this way we could keep track of what we did and what we still needed to do. 

For the individual project, group project and researches we made seperate orginizations in github. This way we could keep everything seperated and we could easily see what we did in each project. We split up the projects in multiple repositories, like for example a frontend and backend repository. 

#### CI/CD
For this project I used github actions to setup CI/CD. You can find out how I used github actions [here](/IndividualProject/CICD/GithubActions.md)

## 4.Group project
<hr>
<h1 align="center">
  Parkings 
  <br>
</h1>
<h4 align="center">
The multi garage parking reservation app
</h4>
<br>
Parkings in an application that has been given to us by Mediaan, an IT company that is specialized in data-driven-orginisation and technological innovation. We will be working on this projects with 7 people me included. The application will be used for making reservations for multiple parking garages. A user can login with google Oauth, after this he can add cars to his account. After doing this he can reserve a parking spot for this license plate. If someone with a reservation is leaving he can pay his parking costs within the application. 

<br>

### Projects
You can find the consumer application in the following 2 repositories:
- [Frontend](https://github.com/ParKings-inc/proftaak_s3_front-end)
- [Backend](https://github.com/ParKings-inc/Proftaak_S3_API)


And you can find the admin application in the following 2 repositories:
- [Frontend](https://github.com/ParKings-inc/ParKings.CMS.UI.React)
- [Backend](https://github.com/ParKings-inc/ParKings.CMS.Server)

<br>

### Technology
We will be using [React](https://reactjs.org) for the frontend and [ASP.Net](https://dotnet.microsoft.com/en-us/apps/aspnet) for the backend. For the database we will use [SQL](https://www.microsoft.com/nl-nl/sql-server/sql-server-2019). To manage our project we will be using Jira, and Scrum method.

### Agile method  
Agile is a way of working that is based on the idea that you should be able to adapt to changes in the project.  This is done by making a backlog for the project and then making a plan for the next sprint every couple of weeks. This way you can adapt to changes in the project.

For our own project we use Scrum:
You can find out what scrum is in [this](GroupProject/Agile/Scrum.md) file.

Now let's talk about how we use the agile method within our project:
You can find how we use agile [here](GroupProject/Agile/AgileInOwnProject.md)


### Cultural differences and ethics

<br>

### Requirements and design
For our group project we got multiple requirements from Mediaan. Based on these requirements we made multiple front-end designs. We also made multiple diagrams to show how the application flow will work and how the database will work. 
For a more detailed explanation look [here](GroupProject/Designs/Documentation/Requirements-Design.md).

## Researches

### CSRF research
The first research I did with Gökay, and this research was about CSRF. We did this research because we wanted to know how CSRF works and how we can prevent it, and if we need it in our own individual project.
We created a seperate git orginization for this research , you can find this repository [here](https://github.com/Gokay-Jordy-S3-Onderzoek/CSRF-Research)





