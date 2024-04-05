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
('What is H2O?', 'Sand', 'Water', 'Oxygen', '2', 1),
('Fastest land animal?', 'Cheetah', 'Lion', 'Eagle', '1', 1),
('Sun is a?', 'Planet', 'Star', 'Moon', '2', 1);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Capital of France?', 'Paris', 'Berlin', 'Madrid', '1', 2),
('Capital of Japan?', 'Seoul', 'Beijing', 'Tokyo', '3', 2),
('Capital of Canada?', 'Ottawa', 'Toronto', 'Montreal', '1', 2);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('What is 10 * 10?', '100', '1000', '10', '1', 3),
('Square root of 64?', '6', '8', '64', '2', 3),
('12 - 8 = ?', '4', '2', '1', '1', 3);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Who wrote Hamlet?', 'Tolkien', 'Shakespeare', 'Austen', '2', 4),
('"Moby-Dick" captain?', 'Ahab', 'Sparrow', 'Hook', '1', 4),
('1984 author?', 'Orwell', 'Huxley', 'Bradbury', '1', 4);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('First computer?', 'ENIAC', 'Macintosh', 'IBM PC', '1', 5),
('Inventor of the web?', 'Jobs', 'Berners-Lee', 'Gates', '2', 5),
('Smartphone inventor?', 'Apple', 'Samsung', 'IBM', '3', 5);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('King of Pop?', 'Elvis', 'Jackson', 'Dylan', '2', 6),
('Beatles drummer?', 'Starr', 'Lennon', 'McCartney', '1', 6),
('Queen lead singer?', 'Mercury', 'May', 'Taylor', '1', 6);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Directed "Psycho"?', 'Hitchcock', 'Kubrick', 'Spielberg', '1', 7),
('"Casablanca" setting?', 'Morocco', 'Egypt', 'France', '1', 7),
('Star of "The Tramp"?', 'Chaplin', 'Keaton', 'Lloyd', '1', 7);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Home runs leader?', 'Bonds', 'Ruth', 'Aaron', '1', 8),
('Fastest man alive?', 'Bolt', 'Gatlin', 'Powell', '1', 8),
('"The Greatest" boxer?', 'Ali', 'Tyson', 'Foreman', '1', 8);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Painter of "Starry Night"?', 'Van Gogh', 'Picasso', 'Monet', '1', 9),
('Sculpted "David"?', 'Michelangelo', 'Donatello', 'Raphael', '1', 9),
('"Mona Lisa" painter?', 'Da Vinci', 'Rembrandt', 'Dali', '1', 9);

INSERT INTO questions (question, option_1, option_2, option_3, correct_option, quiz_id) VALUES 
('Largest ocean?', 'Atlantic', 'Indian', 'Pacific', '3', 10),
('Longest river?', 'Nile', 'Amazon', 'Yangtze', '2', 10),
('Biggest desert?', 'Sahara', 'Arabian', 'Gobi', '1', 10);



