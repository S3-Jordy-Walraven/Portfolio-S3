# Requirements and design

## 1. Requirements
We are building an application for a company called mediaan. They had multiple requirements for the application. Some of these requirements are:
- The application should be able to make reservations for multiple parking garages.
- The application should handle user data very carefully.
- The application should be able to handle multiple users.
- The application should be able to handle multiple cars.

We make sure to keep these requirements in mind while we are building the application.

## 2. Design
We made multiple designs for the application. These designs are based on the requirements that we got from Mediaan. We made these designs in Figma. 

### Front-end designs
While making some frontend designs we asked the PO's quite often if they liked the design or if they wanted to change something. We did this because we wanted to make sure that the designs were good and that they were what the PO's wanted. Down below you can find some of the designs that we made:

Reservation OverViewPage            | Resrvation Creation Page                |Manage Cars Page
:----------------------------------:|:---------------------------------------:|--------------------
![](../Images/ReservationPage.png)  |  ![](../Images/ReservationCreation.png) |![](../Images/ManageCarPage.png)


<br>

## Database design
<hr>
For our database we made an ERD diagram. This diagram shows how the database will work, and what the structure of our backend will be based upon. You can find the diagram below:
<div align="center">
<img src="../Images/ClassDiagram_Proftaak.png" >
</div>

<br >

## Application flow

For our application flow we made a small diagram. This digram shows how the backend and frontend is setup on different servers. And how they communicate with each other. You can find the diagram below:

<div align="center">
<img src="../Images/architecture.png" >
</div>

## Technology
For our application we are using distributed systems. For our front-end we use React with multiple styling libraries. For our backend we are using Asp.Net Core. And for our data base we are using Microsoft SQL.
We are also using a third party authentication service called OAuth2. This service is used to authenticate users. And to make sure that only the right users can access the right data. You can find a design with the tehcnology that we are using below:

<div align="center">
<img src="../Images/techstack.png" >
</div>

