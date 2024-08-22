use sakila;
select * from actor;
select * from film_actor;
select * from film;

select a.*, f.* from actor a
left join film_actor fa on fa.actor_id = fa.actor_id
right join film f on f.id = fa.film_id 
where f.id = 1000;

select * from actor a
left join film_actor fa on fa.actor_id = fa.actor_id
 join film f on f.id = fa.film_id ;



select count(*)
from (
 select a.* from actor a
left join film_actor fa on fa.actor_id = fa.actor_id
 join film f on f.id = fa.film_id 
 UNION
 select a.* from actor a
left join film_actor fa on fa.actor_id = fa.actor_id
 join film f on f.id = fa.film_id ) joined;

 select 'ayam goreng' food 
 union
 select 'bubur ayam' food;

select * from category;
select film_a.title from (
select title from film limit 10) film_a
UNION
select 'data asal' film;
 

 select title,"Action" category from film f
 join film_category fc on fc.film_id = f.id
 join category c on c.id = fc.kategori_id 
 where c.name = 'Aksi'
 union
select title,"anak-anak" category from film f
 join film_category fc on fc.film_id = f.id
 join category c on c.id = fc.kategori_id 
 where c.name = 'Children';

 





-- film 100  1,2,3,4,5,6,7,8,9,10,-100
-- film_actor  101,102,103,104
-- join  muncul cuma 1-104

select * from film;



select * from film_actor where film_id = 1000;


use learn_prisma;
select * from branches;
insert into managers (`name`,`branchId`) VALUES ("vincent", 1);