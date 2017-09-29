use kodus_react;

INSERT INTO property (prop_type, landlord_id, prop_active, situs_prefix, situs_num, situs_street, situs_suffix, situs_city, situs_state, situs_zip, image_id)
VALUES 
("H", 3, 1, NULL, "3513", "Josh","Ln", "Austin", "TX", "78754", 1),
("H", 2, 1, NULL, "13605", "Coleto Creek","Trl", "Austin", "TX", "78754",4),
("H", 3, 1, NULL, "7101", "Doswell","Ln", "Austin", "TX", "78744", 5),
("H", 1, 1, NULL, "11504", "Church Canyon","Ln", "Austin", "TX", "78731", 8),
("H", 1, 1, "N", "4202", "Hills","Dr", "Austin", "TX", "78707",9)
;



INSERT INTO units (unit_type, prop_id, unit_active, rent_amt, utilities, pets, sqft, bed, bath, bath_private, living, dining, kitchen, garage, carport, list_flag)
VALUES 
("H", 1, 1, 4392.00, 0, 0, 5351, 4, 3.5, 0, 2, 2, 1, 3, 0, 1),
("H", 2, 1, 3204.00, 0, 1, 4631, 5, 5, 0, 2, 1, 1, 2, 0, 1),
("B", 3, 1, 650.00, 1, 0, 400, 1, 1, 0, 0, 0, 1, 0, 1, 1),
("B", 3, 1, 1200.00, 1, 1, 750, 2, 1.5, 1, 0, 1, 1, 1, 0, 1),
("H", 4, 1, 827.00, 0, 0, 1518, 3, 2, 0, 1, 1, 1, 0, 2, 1),
("H", 5, 1, 2389.00, 0, 0, 3905, 4, 4.5, 0, 2, 1, 1, 2, 0, 1)
;

INSERT INTO landlord (salutation, first_name, middle_name, last_name, email, phone1, phone1_type, phone2, phone2_type, addr1, addr2, addr_city, addr_state, addr_zip)
VALUES
("Mr", "Charlie", NULL, "Brown", "Cbrown@email.com", "5551234567", "H", NULL, NULL, "123 Main Street", NULL, "Austin", "TX", "78701"), 
("Mr", "Linus", NULL, "Van Pelt", "dragmyblanket@email.com", "1235556789", "H", NULL, NULL, "4505 Duval Street", NULL, "Austin", "TX", "78721"), 
("Ms", "Pepper", "Mint", "Patty", "CmonChuck@email.com", "1235556789", "H", NULL, NULL, "210 Lavaca Street", NULL, "Austin", "TX", "78703")
;

INSERT INTO tenant (application_id, salutation, first_name, middle_name, last_name, email, phone1, phone1_type, phone2, phone2_type, addr1, addr2, addr_city, addr_state, addr_zip)
VALUES
(1, "Mr", "Bruce", NULL, "Banner", "realbig@email.com", "5551234567", "H", NULL, NULL, "5801 Green Road", NULL, "Austin", "TX", "78701"), 
(2, "Ms", "Jean", NULL, "Grey", "redhead@email.com", "1235556789", "H", NULL, NULL, "11711 Marvel Lane", NULL, "Austin", "TX", "78745"), 
(3, "Mr", "Nick", NULL, "Fury", "kissmyass@email.com", "1235556789", "H", NULL, NULL, "210 Pulp Fiction Trail", NULL, "Austin", "TX", "78714")
;


INSERT INTO sub_tenant (tenant_id, salutation, first_name, middle_name, last_name, email, phone1, phone1_type, phone2, phone2_type, addr1, addr2, addr_city, addr_state, addr_zip)
VALUES
(1, "Mr", "Incredible", NULL, "Hulk", "meangreen@email.com", "5550987654", "H", NULL, NULL, "5801 Green Road", NULL, "Austin", "TX", "78701")
;


INSERT INTO lease (unit_id, tenant_id, start_dt, end_dt, term_dt, rent_amt)
VALUES
( 1, 2, "2017-01-01", "2018-12-31", NULL, 4394.00),
( 5, 3, "2016-08-10", "2019-10-10", NULL, 1518.00),
( 4, 1, "2017-07-04", "2019-07-04", NULL, 1200.00)
;


INSERT INTO images (ref_type, ref_id, image_path)
VALUES 
("P", 1, "https://www.zillow.com/homedetails/3513-Josh-Ln-Austin-TX-78730/52275166_zpid/"),
("U", 1, "https://photos.zillowstatic.com/p_c/IS2z74ccwxxii11000000000.jpg"),
("P", 1, "https://photos.zillowstatic.com/p_c/ISi3ib99qhnu321000000000.jpg"),
("P", 2, "https://www.zillow.com/homedetails/13605-Coleto-Creek-Trl-Austin-TX-78732/83814922_zpid/"),
("P", 3, "https://www.zillow.com/homedetails/7101-Doswell-Ln-Austin-TX-78739/64825940_zpid/"),
("U", 4, "https://photos.zillowstatic.com/p_c/ISmmvxvsrntgfu0000000000.jpg"),
("U", 3, "https://photos.zillowstatic.com/p_c/ISizydvzi8atcl0000000000.jpg"),
("P", 4, "https://www.zillow.com/homedetails/11504-Church-Canyon-Dr-Austin-TX-78754/70339118_zpid/"),
("P", 5, "https://www.zillow.com/homedetails/4202-N-Hills-Dr-Austin-TX-78731/29351622_zpid/")
;

INSERT INTO application (salutation, first_name, middle_name, last_name, email, phone1, phone1_type, phone2, phone2_type,
unit_id, lease_length, num_occupants, move_in_dt, addr1, addr2, addr_city, addr_state, addr_zip, cur_rent, reason_leave, emp_status, emp_income, addl_income, 
addl_income_source, emp_company, emp_job_title, emp_addr1, emp_addr2, emp_city, emp_state, emp_zip, emp_phone, emp_supervisor,
pet_num, pet_dog, pet_cat, pet_bird, pet_fish, pet_other, pet_other_desc, pet_spayed, veh_num, veh_desc)
VALUES
("Mr", "Bruce", NULL, "Banner", "realbig@email.com", "5551234567", "H", NULL, NUll, 
4, 18, 2, "2017-07-04", "5801 Green Road", NULL, "Austin", "TX", "78701", 1000.00, "flat too small",  "E", 65000, 24000, 
"royalties", "Nukes R Us", "Mad Scientist", "123 Gieger", NULL, "Los Alamos", "NV", "90120", NULL, "Nerdy Guy", 
0,0,0,0,0,0, NULL, 0, 1, "Armoured Tank"),

("Ms", "Jean", NULL, "Grey", "redhead@email.com", "1235556789", "H", NULL, NULL, 
1, 12, 1, "2017-01-01",  "11711 Marvel Lane", NULL, "Austin", "TX", "78745", 3900.00, "boyfriend eyeing other girls", "E", 150000, 0, 
NULL, "X Factor", "Teacher", "123 Ginger Girl", NULL, "Los Vegas", "NV", "90120", NULL, "Nerdy Guy2", 
0,0,0,0,0,0, NULL, 0, 1, "Armoured Jet"),

("Mr", "Nick", NULL, "Fury", "kissmyass@email.com", "1235556789", "H", NULL, NULL,
5, 24, 1, "2016-08-10", "210 Pulp Fiction Trail", NULL, "Austin", "TX", "78714", 1725.00, "messy job call in the wolf",  "E", 265000, 125000, 
"royalties", "Bad Ass Inc", "Silent Assassin", "123 Gieger", NULL, "Los Angles", "CA", "90120", NULL, "Scarier Guy", 
0,0,0,0,0,0, NULL, 0, 1, "Armoured Aircraft Carrier")
;