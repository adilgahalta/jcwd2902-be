use world;

-- Find country name with most population from table country
select name from country ORDER BY population DESC LIMIT 1;
-- Find the second one country with most population from table country
select name from country ORDER BY population DESC LIMIT 1,1;
-- Find country name with lowest population from table country
select name from country ORDER BY population ASC LIMIT 1;
-- Find the third one country with lowest population from table country
select name,population from country ORDER BY population ASC LIMIT 2,1;
-- Find the largest continent by sum surface area with life expectancy more than 75
select  c.name,sum(c.surfaceArea) sum_surface from country c where c.lifeExpectancy > 75 group by c.name order by sum_surface desc limit 1;


use sakila;

-- Show all data using IN, and display the country_id and country columns of the following countries: China, Bangladesh, and India
select * from country where country in ('China', 'Bangladesh',  'India');
-- Find every actors whose last names contain the letters OD. Order the rows by last name and first name, in that order
select first_name, last_name from actor where last_name like '%od%' order by last_name, first_name;
-- Modify table actors. Add a middle_name column to the table actor. Position it between first_name and last_name. Hint: you will need to specify the data type.
alter table actor add middle_name varchar(45) after first_name;
-- List every last names of actors and the number of actors who have that last name, but only for names that are shared by at least two actors
select last_name, count(*) from actor group by last_name having count(*) >= 2;
-- Join the table and display the first and last names, as well as the address, of each staff member.
select s.first_name,s.last_name,a.address from staff s 
join address a on a.address_id = s.address_id;

-- Find out how many copies of the film “Hunchback Impossible” exist in the inventory system
select count(*) total_copies from inventory i 
join film f on f.id = i.film_id
where f.title = 'Hunchback Impossible';
-- Find and display the most frequently rented movies in descending order.
select f.title, count(i.film_id) total_rented from rental r 
join inventory i on i.inventory_id = r.rental_id
join film f on f.id = i.film_id
group by i.film_id
order by total_rented desc limit 1;
-- Write down a query in order to display each store its store ID, city, and country
select s.store_id, ct.city, c.country from store s 
join address a on a.address_id = s.address_id
join city ct on ct.city_id = a.city_id
join country c on c.country_id = ct.country_id;
-- Use subqueries to display every actors who appear in the film Alone Trip.
select distinct title, (select CONCAT(first_name,' ',last_name) from actor a where a.actor_id = fa.actor_id) from film f 
join film_actor fa on fa.film_id = f.id
where title = 'Alone Trip';
-- Delete the middle_name column from table actors
ALTER TABLE actor DROP middle_name;
