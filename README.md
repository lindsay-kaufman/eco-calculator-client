# Eco-Calculator

The purpose of this app is to allow users to assess the environmental impact of an article of clothing, whether they are considering purchasing it or if it already exists in their closet. 

A user is given an impact score for each garment they create. This score is a weighted sum of individual material scores, which come from The Higg Index.


## Important Links

- [API Repo](https://github.com/lindsay-kaufman/eco-calculator-api)
- [Deployed API](https://ecocalculator.herokuapp.com/)
- [Deployed Client](https://lindsay-kaufman.github.io/eco-calculator-client/#/)

## Planning Story
In planning, I first had to find the proper data that I needed to find an impact score. I decided upon the Sustainable Apparal Coalition Material Index, as it is a tool used industry wide in fashion. 

Then, I wrote out my user stories, drew my wireframes, and created my ERDs. I also determined how I would calculate the impact score of a garment based off the materials of that garment. 

Last, I created a schedule to follow as well as a checklist of project requirements and stretch goals.

## User Stories
- As a user, I would like to have the ability to sign in and out.
- As a user, I would like to have the ability to change my password.
- As a user, I would like to be notified if my sign in or change password fails.
- As a user, I would like to create a new garment with a title, description, and materials. 
- As a user, I would like to get the environmental impact score of my garments.
- As a user, I would like to edit and delete my garments. 
- As a user, I would like to view all my garments. 
- As a user, I would like to get information on each material in my garments (stretch goal)


## Technologies Used
- Javascript
- React.js
- Axios
- HTML/CSS
- Bootstrap
- Ruby on Rails

## Unsolved Problems
- Eventually I would like give a user the total impact score of all of their garments. This would allow a user to assess their entire closet. 
- I would also like to give users more information on each material, such as how their own scores were calculated.
- The Higg Material Index provides more detailed impact scores for each material, such as a water score or a global warming score. I would like to allow users to see those scores for their own garments as well. 

## Wireframes
- ![Signed-Out](https://media.git.generalassemb.ly/user/24753/files/ee35d100-61e9-11ea-8044-3544c2cb6469)
- ![Signed-In](https://media.git.generalassemb.ly/user/24753/files/ed9d3a80-61e9-11ea-8a5c-089106f4702c)
- ![Create-Garment](https://media.git.generalassemb.ly/user/24753/files/ed04a400-61e9-11ea-86dd-9c53cc5ebfee)
- ![View-Garments](https://media.git.generalassemb.ly/user/24753/files/ed04a400-61e9-11ea-9c51-fae5249fee30)
- ![ERD](https://media.git.generalassemb.ly/user/24753/files/ed9d3a80-61e9-11ea-9cbe-35df865c0fa7)
