create database purwadhika_student;
create database purwadhika_schedule;
create database purwadhika_branch;
show databases like '%purwadhika%';
drop database purwadhika_schedule;

--purwadhika students
use purwadhika_student;
create table students (id int AUTO_INCREMENT PRIMARY KEY, last_name VARCHAR(255), first_name VARCHAR(255), address VARCHAR(255), city VARCHAR(255));
alter table students add column email VARCHAR(255);
alter table students add column (gender ENUM('male','female'), batch_code CHAR(8), phone_number CHAR(12), alternative_phone_number CHAR(12));
alter table students CHANGE COLUMN alternative_phone_number description VARCHAR(255);
alter table students drop COLUMN gender;

-- purwadhika branch
use purwadhika_branch;
create table branches (id int AUTO_INCREMENT PRIMARY KEY, branch_name VARCHAR(255) UNIQUE, pic VARCHAR(255), address VARCHAR(255), city VARCHAR(255), province VARCHAR(255));
insert into branches (branch_name, pic, address, city, province) VALUES('BSD','THOMAS','GREEN OFFICE PARK 9', 'BSD', 'TANGERANG'), ('JKT','BUDI','MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'), ('BTM', 'ANGEL','NONGSA', 'BATAM', 'KEP. RIAU');
update branches set pic = 'DONO' where city = 'BSD';
insert into branches (branch_name, pic, address, city, province) VALUES('BLI','TONO','GIANYAR','GIANYAR','BALI');
select * from branches;
