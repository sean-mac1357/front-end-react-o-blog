INSERT INTO characters (name, slug, attribute, image) 
VALUES 
('Rainbow Dash', 'rainbow_dash', 'can allow her to fly extremely fast', 'https://i.pinimg.com/originals/c3/f7/7a/c3f77af44e33c7f1825533b0c7eb299b.png'),
('Flutter Shy', 'flutter_shy', 'can allow her to sway animals to help her complete tasks', 'https://i.ebayimg.com/images/g/K6UAAOSwnipWUQop/s-l300.jpg'),
('Pinkie Pie', 'pinkie_pie', 'can allow her to make cupcakes and is extremely sweet', 'https://images-na.ssl-images-amazon.com/images/I/41mP4KcuQNL._AC_SX425_.jpg'),
('Twilight Sparkle', 'twilight_sparkle', 'can allow her to use telekinesis to make stuff float', 'https://i.ebayimg.com/images/g/kt0AAOSwT4lWTfdj/s-l300.jpg'),
('Apple Jack', 'apple_jack', 'can allow her to use her strength and courageousness to lead the group', 'https://sites.google.com/site/mylittleponyfansonly/_/rsrc/1445221559312/applejack/Apple5.png'),
('Rarity', 'rarity', 'can allow her to make fashionable clothes', 'https://i.pinimg.com/236x/45/61/e7/4561e715f838eff33d2a9eabc3ac8013.jpg');

INSERT INTO users (first_name, last_name, email, password)
VALUES
('Laura', 'MacEachern', 'lmac@email.com', '123qwaszx'),
('Sean', 'MacEachern', 'smac@email.com', '123qwaszx');

INSERT INTO reviews (comment, pony_id, user_id)
VALUES
('With her abilities to fly very fast she is by far my favorite pony!!🦄', 1, 1),
('She is like me in a way on how I love animals and am a little shy!', 2, 1),
('I love Baking with my mom', 3, 1),
('I wish I had her powers sometimes to pick up my brother when he is annoying me', 4, 1),
('She is so strong and a good leader I hope I am like her when I grow up', 5, 1),
('She makes the best clothes I wish I was a pony so I could wear them', 6, 1);
