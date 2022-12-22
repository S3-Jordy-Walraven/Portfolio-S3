# Ethics

## What is ethics in software engineering?
Ethics consists of multiple principles related to how a software engineer makes certain decisions. These decisions can be related to the software itself, the people that use the software or the people that work on the software. These principles are related to the software engineer's moral compass. This moral compass is what guides the software engineer in making the right decisions. Some of these principles are:

*  Software engineers act consistently with the public interest.
*  Software engineers act in a way that is expected from them by their clients and product owners
*  Software engineers make sure that the software meets professional standards.
*  Software engineers make sure that the software is safe and secure.
*  Software engineer will learn and grow throughout their career.
*  Software engineers will respect the privacy of their clients and product owners.

## What can developers do to make sure they make ethical software?
A major guideline that helps developers in makikng ehtical software is the [Code of Ethics and Professional Conduct](https://www.who.int/about/ethics/ethical-principles). This code of ethics is made by the World Health Organization. This code of ethics is made to make sure that the software that is made is ethical. This code of ethics is made up of 7 principles, some are more important and obvious than others. 

## Ethics within our group
For our group project we are creating an app where people can reserve and park on parking spots in a garage. This app allows people to login and couple their car, it also makes sure that there are available spaces when someone wants to reserve a spot. 


### Handling data
We need to make sure that the data that is handled by our app is handled in a ethical way. This means that we need to make sure that the data is secure and that the data is not used for anything else than what it is intended for. We have a feature where users can login into our app, we don't need most of this userData, so the only thing that we save in our database is the User ID. This way we can make sure that the data is secure and that the data is not used for anything else than what it is intended for.

A flaw with the way we handle user data is that a license plate needs to be couple to the a reservation. This means that its possible to see which license plate was where. A way we could've prevented this is by hashing the license plate. This way we could've made sure that the license plate is not readable.

We currently also don't have protection against people that aren't authorized making an api request. Meaning that anyone can make an api request to our api. This is a flaw in our security. We could've prevented this by using a token that is only given to authorized users. This way we could've made sure that only authorized users can make an api request.

### Code Quality

To maintain high code quality in our group and make sure that our code works we need to add tests to our project. This way we can make sure that the code always works and changes don't break the code. We didn't make any tests for our project, this is a flaw in our code quality. We could've prevented this by adding tests to our project. This way we could've made sure that our code is always working and that changes don't break the code.

The team does keep track of what code gets pushed to main or development. We always make sure that the code that gets pushed is working and that it doesn't break the code. We do this by making sure that the code is reviewed by at least one other person. This way we can make sure that the code is working and that it doesn't break the code.
