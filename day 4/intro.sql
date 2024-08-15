
create database test_2902;
show databases; -- tampilkan database
show create database test_2902;
use test_2902; -- menggunakan db test_2902
drop database test_2902; -- hapus database
create table student(name varchar(30) not null, marks int); -- buat table student, kolom 
show tables; -- lihat tables di test_2902
show full tables;
show tables like '%student%';
alter table student add class varchar(100); -- edit table student, tambah kolom class di table student
alter table student drop column class; -- edit table student, hapus kolom class

-- DATA STUDENT
select * from student; -- lihat data student
insert into student values('adil',100); -- insert data
delete from student where name = 'adil'; -- menghapus data student nama adil
insert into student(name,class) values('adil','JCWD'); -- insert student tanpa insert data marks
insert into student values('apad', 210, 'JCWD'); -- insert data student apad
insert into student values('vincent',88,'JCWD'),('rafi',90,'JCWD'); -- insert data student vincent dan rafi (lebih dari 1 data)
update student set class = 'JCWD'; -- update data class dalam table student tanpa kondisi
update student set class = 'JCDM' where name = 'bogel';
insert student values('om',100,'JCDM'),('adit', 99, 'JCDM');
select name,marks from student; -- lihat kolom name dan marks
alter table student add id int AUTO_INCREMENT primary key;
select DISTINCT name from student;
select DISTINCT class from student;
select count(class) from student; -- menghitung class
select  count(DISTINCT class) from student; -- menghitung class yg berbeda value
update student set name = 'adilllll', marks = 98 where id = 6;
select * from student where marks >= 100 and (class = 'JCWD'  or name = 'adil');
select * from student order by marks DESC; -- sorting student berdasarkan marks besar ke kecil
select * from student limit 0,2; -- page 1 
select * from student limit 2,2; -- page 2

select MAX(marks) nilai_max, class from student group by class having class = 'JCWD' order by nilai_max desc;
-- select column from table where ,group , order by, limit 
select distinct (select max(s.marks) from student s where s.class = class), class from student;

-- where => kondisi ke table 
-- having => kondisi hasil result select group by


-- crud pada database,table, (yang bukan data) => create, show, alter, drop 
-- crud pada data di table => insert, select, update, delete

-- user id , nama  => 1, adil , 2, apad
-- posts id,img, caption ,userid => 1, 1.jpg, gambar adil joget, 1
-- comment id,userid,comment, postid => 1, 1, joget mulu bang, 1 , 2,2 , ikutan dong, 1 

-- , having, group by,



