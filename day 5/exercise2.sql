use sakila;
select first_name, last_name from actor;
select actor_id, first_name, last_name from actor where first_name like '%joe%';
select address, district, city_id from address where district in ('California', 'Alberta' , 'Mekka');
select count(actor_id) total from actor where last_name = 'wood';
select customer_id, sum(amount) sum_payment from payment group by customer_id having sum_payment > 20;
insert into actor (first_name,last_name) values('JHONNY','DAVIS');
insert into actor (first_name,last_name) values('ADAM','DAVIS'),('JEREMY','DAVIS'),('CRAIG','DAVIS'),('STEVE','DAVIS');
select count(actor_id) total from actor where last_name = 'DAVIS';
delete from actor where last_name ='DAVIS' and first_name ='JENNIFER';
update actor set first_name = 'GEORGE' where last_name ='DAVIS';
select first_name, last_name from actor;
select a.first_name,a.last_name  from film_actor fa
join actor a on a.actor_id = fa.actor_id 
group by a.actor_id 
order by count(film_id) desc limit 10;
select title, description, length, rating from film where special_features like '%Deleted Scenes,Behind the Scenes%' order by length desc;
select c.country, count(cu.customer_id) total_inactive_customer  from country c 
join city ct on ct.country_id = c.country_id
join address a on a.city_id = ct.city_id
join customer cu on cu.address_id = a.address_id and cu.active = 0
group by c.country
order by total_inactive_customer desc;