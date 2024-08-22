use sakila;
select first_name, last_name from actor;
select concat(first_name," ", last_name) as fullname from actor;
select actor_id, first_name, last_name from actor where first_name like '%joe%';
select address, district, city_id from address where district in ('California', 'Alberta' , 'Mekka');
select address, district, city_id from address where district = 'California' or district = 'Alberta' or district = 'Mekka';
select count(*) total from actor where last_name = 'wood';
select customer_id, sum(amount) sum_payment from payment group by customer_id having sum_payment > 20;
insert into actor (first_name,last_name) values('JHONNY','DAVIS');
insert into actor (first_name,last_name) values('ADAM','DAVIS'),('JEREMY','DAVIS'),('CRAIG','DAVIS'),('STEVE','DAVIS');
select count(*) total from actor where last_name = 'DAVIS';
delete from actor where last_name ='DAVIS' and first_name ='JENNIFER';
update actor set first_name = 'GEORGE' where last_name ='DAVIS';
select first_name, last_name from actor;
select a.first_name,a.last_name  from film_actor fa
join actor a on a.actor_id = fa.actor_id 
group by a.actor_id 
order by count(film_id) desc limit 10;
select title, description, length, rating, special_features from film where special_features like '%Behind the Scenes%'  and special_features like '%Deleted Scenes%' order by length desc;
select distinct special_features from film;
select c.country, count(cu.customer_id) total_inactive_customer  from country c 
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id
join customer cu on cu.address_id = a.address_id and cu.active = 0
group by c.country
order by total_inactive_customer desc;

select * from country c 
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id 
join customer cu on cu.address_id = a.address_id;


select count(c.customer_id) as count, co.country from customer c 
join address a on a.address_id = c.address_id
join city ct on ct.city_id = a.city_id
join country co on co.country_id  = ct.country_id
where active = 0
group by co.country
order by count DESC;

select id from actor where first_name = ''


call get_inactive_customers();


use purwadhika_student;
create table user (id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255));
insert into user (name, email, password) values ('joe', 'joe@mail.com', 'joe123');
select * from user;
select * from user where email = "joe@mail.com" and password = "joe123";