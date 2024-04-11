INSERT INTO users (email, password) VALUES 
('user1@example.com', 'pass1'),
('user2@example.com', 'pass2');

INSERT INTO quizzes (name, user_id) VALUES 
('Science Basics', 1),
('World Capitals', 1),
('Math Trivia', 1),
('Literature 101', 1),
('Tech Innovations', 1),
('Music History', 2),
('Cinema Classics', 2),
('Sports Legends', 2),
('Art and Artists', 2),
('Geography Facts', 2);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('What is the chemical formula for water?', 'H2O', 'CO2', 'N2O', '1', 1),
('Which animal is recognized as the fastest on land?', 'Cheetah', 'Lion', 'Eagle', '1', 1),
('What type of celestial body is the Sun?', 'Planet', 'Star', 'Moon', '2', 1);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('What is the capital city of France?', 'Paris', 'Berlin', 'Madrid', '1', 2),
('Which city is the capital of Japan?', 'Seoul', 'Beijing', 'Tokyo', '3', 2),
('Identify the capital city of Canada.', 'Ottawa', 'Toronto', 'Montreal', '1', 2);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Calculate the product of 10 times 10.', '100', '1000', '10', '1', 3),
('What is the square root of 64?', '6', '8', '64', '2', 3),
('What is the result of subtracting 8 from 12?', '4', '2', '1', '1', 3);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who is the author of the play Hamlet?', 'Tolkien', 'Shakespeare', 'Austen', '2', 4),
('Who is the captain in the novel "Moby-Dick"?', 'Ahab', 'Sparrow', 'Hook', '1', 4),
('Who is the author of the dystopian novel 1984?', 'Orwell', 'Huxley', 'Bradbury', '1', 4);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('What was the first electronic digital computer?', 'ENIAC', 'Macintosh', 'IBM PC', '1', 5),
('Who is credited with inventing the World Wide Web?', 'Jobs', 'Berners-Lee', 'Gates', '2', 5),
('Which company is recognized as the inventor of the smartphone?', 'Apple', 'Samsung', 'IBM', '3', 5);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who is often referred to as the King of Pop?', 'Elvis', 'Jackson', 'Dylan', '2', 6),
('Who was the drummer for the iconic band The Beatles?', 'Starr', 'Lennon', 'McCartney', '1', 6),
('Who was the lead singer of the rock band Queen?', 'Mercury', 'May', 'Taylor', '1', 6);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who directed the classic horror film "Psycho"?', 'Hitchcock', 'Kubrick', 'Spielberg', '1', 7),
('What is the primary setting of the movie "Casablanca"?', 'Morocco', 'Egypt', 'France', '1', 7),
('Who starred as the lead in the film "The Tramp"?', 'Chaplin', 'Keaton', 'Lloyd', '1', 7);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who holds the record for the most career home runs?', 'Bonds', 'Ruth', 'Aaron', '1', 8),
('Who is recognized as the fastest man alive in track?', 'Bolt', 'Gatlin', 'Powell', '1', 8),
('Who is often called "The Greatest" in boxing history?', 'Ali', 'Tyson', 'Foreman', '1', 8);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who painted the famous "Starry Night"?', 'Van Gogh', 'Picasso', 'Monet', '1', 9),
('Who is the sculptor of the renowned statue "David"?', 'Michelangelo', 'Donatello', 'Raphael', '1', 9),
('Who is the painter of the iconic "Mona Lisa"?', 'Da Vinci', 'Rembrandt', 'Dali', '1', 9);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Which is the largest ocean on Earth?', 'Atlantic', 'Indian', 'Pacific', '3', 10),
('What is the name of the world''s longest river?', 'Nile', 'Amazon', 'Yangtze', '2', 10),
('Which is considered the biggest desert in the world?', 'Sahara', 'Arabian', 'Gobi', '1', 10);





