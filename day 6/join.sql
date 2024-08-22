
-- product 
--  - id int
--  - nama varchar
--  - category_id 

-- category 
-- id int 
--  - category varchar
--  - sub_categiry varchar

--  1, sofa, interior , living room
--  2, meja, interior , living room
--  3, kompor, Interior, kitchen set
--  3, kompor, interiors, kitchen set


--  interior design 
--  update from product set category = 'interior design' where category = 'interior'

use sakila;

select * from film;
select * from film_category;
select * from category;

select f.title, c.name from film f 
join film_category fc on fc.film_id = f.film_id 
join category c on c.category_id = fc.category_id;


select * from category;
select * from film_category;
update  category set name = 'Aksi' where category_id = 1;
select * from film where id = 1;
select * from category where id = 6;

select f.title, c.name from film f 
join film_category fc on fc.film_id = f.id 
join category c on c.id = fc.kategori_id
where f.id = 1;

select * from film f 
join film_category fc on fc.kategori_id = f.id 
where f.id = 1;

select * from category;
-- insert into film_category  (film_id,kategori_id) values(1,2);
-- alter table film_category RENAME column category_id to  kategori_id;

film 
id  int
title varchar
length int
desc varchar
category varchar

film_category
id int
film_id int
kategori_id int

category 
id int 
name varchar

film
1, deadpool, 120, marvel's film , action  

category 
1, action 
2, superheroes 

film_category 
1, 1
1,2 


students 
id 
name 
address 
email 
class id

absensi 
id 
student_id 
tgl datetime 

class 
id 
class_name
student_id

student_class 
student_id
class_id
tgl_join
aktif 

id, class, student_id
1. JCWD, 
2. jcdm
3. jcvd 
4. jcds

1, 1, today, true 
2, 1, today,true 
500 data


select * from students s 
join absensi a on a.student_id = s.id  



-- tournament winner
-- tournament varchar
-- year  int
-- winner varchar

-- winners 
-- winner varchar
-- dob tgl

tournament 
id 
tournament_name varchar 

tournament_year
id
tournament_id
year int
address varchar

tournament_winner 
tournament_id int
tournament_year_id int
winner_id int

winner 
id int
name varchar
dob varchar 

transaksi
id
no_inv
customer_id
invoice_date
total_price
kembalian
payment_type (debit,credit,cash,uang eletronic)
discount 

transaksi_detail 
id
transaksi_id
product_id
qty

product
id
product_name
price
stock


product_category
product_id
category_id


category 
id
category_name

nyimpen data
hasil data => report 




