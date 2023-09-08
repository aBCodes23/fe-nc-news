# Introduction
This is a repository for the front end of a news based website. It is deployed using netlify, and is available on https://asbc-news.netlify.app/. The backend repository for the project is here, https://github.com/aBCodes23/nc-news. It was built as the final part of the front end module of [Northcoders'](https://northcoders.com/our-courses/skills-bootcamp-in-software-development) software development bootcamp.

## ASCB News
ASCB News is a social news aggregation, web content rating and discussion website. 
  
It's has a header bar and five main pages.   

### Header
The header bar holds the name of the website, the links to the main components and the account name of the user currently logged in.

### Home
Currently, the home page welcomes the user to the website.

### Articles
The articles page features previews of all the articles in the database. It has the ability to sort by various elements and is able to switch the order between ascending and descending.

### Articles by Topic
The articles by topic page, accessible by the topics link in the header, has the same functionality as Articles but is limited to articles linked to the particular topic selected.

### Individual Article
The article page displays the body of the article and all the key information. Here, users can vote an article up or down.
The article page all displays the comments associated with the article and has the ability to add or delete comments, provided the user is the author.
Both the votes and comments are rendered optimistically, providing immediate feedback to the user.

### Users
The users page lists all the users in the database and also functions as a simple login page, where clicking on an avatar will log you in as that user.

##  Development History
:white_check_mark: View all articles  
:white_check_mark: View an individual article  
:white_check_mark: View comments associated with article  
:white_check_mark: Vote on an article   
:white_check_mark: View articles by topic  
:white_check_mark: Sort all articles  
:white_check_mark: Delete comments  
:white_check_mark: Error Handling  
:white_check_mark: Basic Styling  
  
:black_square_button: Add top articles (by vote) to home page  
:black_square_button: Add pagination to articles and articles by topic  
:black_square_button: Add an article  
:black_square_button: Vote on a comment  
:black_square_button: Advances Styling  
:black_square_button: Dark mode  
:black_square_button: Accessibility mode  
  
## Running Locally
Minium version of Node required: v20.3.0.

To run the project locally:

1. Copy the repository URL

2. In the terminal:  
   ```git clone <URL>```
   
3. Change directory to the newly created repository:  
   ```cd fe-nc-news```
   
4. Open in VS Code:  
   ```code .```
   
5. Run the following commands in the terminal:  
   ```npm install```  
   ```npm run dev```
   
6. Click the link in the terminal
