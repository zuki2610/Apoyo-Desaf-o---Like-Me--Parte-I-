
create database likeme;

CREATE DATABASE
\c likeme

create table posts (id serial, titulo varchar(25), img varchar(1000), descripcion varchar(255), likes INT);

\d posts

INSERT INTO posts (titulo, img, descripcion, likes) VALUES ('tomate', 'pelitototott', 'tomate rojo', 1);

UPDATE posts SET img='https://www.semana.com/resizer/aRHu2W7hO8iwPC4QVF4CYrJPKL0=/1920x1080/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/UGEQV4FXHZBRRKOEY7WTKS7PHM.jpg' where id=1;

SELECT * FROM posts;


