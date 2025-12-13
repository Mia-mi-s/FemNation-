update 02/11/2025

Feminist Awareness Website

Project Overview :

This project is a personal and educational website designed to promote feminist awareness and develop my skills in HTML, CSS, JavaScript, and MySQL.

Goals

* Strengthen skills in front-end web development (HTML, CSS, JavaScript).
* Learn **database integration** with **MySQL** for storing user inputs and dynamic content.
---

Games Section

* A fun area that includes small web-based games.
---

Used

* HTML5 – Structure and content
* CSS – Layout, color, and responsiveness
* JavaScript – Interactivity and dynamic elements
* MySQL – Database for Q&A and message wall
* (Future learning goal: Node.js for backend integration)*

-
Challenges & Solutions

| Challenge             | Description                             | Solution                             |
| --------------------- | --------------------------------------- | ------------------------------------ |
| Responsive Navigation | Keeping layout consistent across pages  | CSS and use Flexbox/Grid             |
| Database Integration  | Learning how to connect MySQL with JS   | Start with tutorials                 |
| Question Bot          | Building logic for question recognition | Implement keyword-based responses    |
| Message Wall          | Displaying dynamic user input           | Use MySQL                            |

---
Timeline

| Phase   | Focus                                          | Duration  |
| ------- | ---------------------------------------------- | ----------|
| Phase 1 | Build basic HTML/CSS pages                     | 1 week    |
| Phase 2 | Add JavaScript                                 | 2 week    |
| Phase 3 | Implement database                             | 2 week    |
| Phase 4 | testing                                        | 3 days    |
| Phase 5 | fixing                                         | 1 week    |

---
Future Plans

* Integrate AI-driven Q&A system.
* Message wall

--------------------------------------------------------------------------

update 03/11/2025

--gotta add a banner that says either games or play --
--also 

game 1 ideas :

the FemNation squad where you collect points to achieve rights sum funny

characters HAMUWARRIOR - PAULOAVENGER - BLUEBIRD - PERFORMATIVESIGMA

ALL pixel characters to create in order to be able to pick a characters


game 2 ideas :

quizz game about the waves of feminism


game 3 ideas : 

shooting game would be cool

i did start formatting the game page and also fixed the top marge that was huge
i only needed it in certain pages since i got my nav bar set as the top and it eats
my elements in some pages i added that the <body> has a class with a margin so it pushes down elements still need to figure out the firstpage margin correctly
------------------------------------------------------------------------------------
on the share page add a button that mutes the song to not piss ppl off
---------------------------------------------------------------------------------
05-11-2025
-deleted the first database made a general database that includes 2 tables one for the chat but and the second for the message wall
-fixed why the pictures in the map were not showing
------------------------------------------------------------------------------------------------------------------------------------
CREATE DATABASE FemNation;
USE FemNation;
CREATE TABLE QnA (
  id INT AUTO_INCREMENT PRIMARY KEY,
  Questions TEXT NOT NULL,
  Answer TEXT NOT NULL
);

INSERT INTO QnA (Questions, Answer)
VALUES

SELECT * FROM QnA;

CREATE TABLE FemChatBot (
  id INT AUTO_INCREMENT PRIMARY KEY,
  UserMessage TEXT NOT NULL,
  BotReply TEXT
);
---------------------------------------------------------------------------------------------------------------------------------
for the QnA page add a round div where for every dead women according to UN stat the sircle fills up with red representing blood.
---------------------------------------------------------------------------------------------------------------------------------
12/13/2025

what i fixed :

ON INDEX :
Fiwed the cicking animation to stop at the end of the ch content on index + Fixed the tiles to fit all in one row, they look like skinny fries wtv..

ON WAVES :
Background color of each slide to rainbow  and the content + added images

ON FEMMINISM 101 :
background color the content(text), added footer

ON TODAY :

