CREATE TABLE characters (
    id serial Primary Key,
    name text NOT NULL,
    slug text,
    attribute varchar(200),
    image varchar(500)
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    first_name varchar(100),
    last_name varchar(100),
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    comment text,
    pony_id integer REFERENCES characters (id),
    user_id integer REFERENCES users (id)
);