CREATE database kodus_react;

USE kodus_react;

CREATE TABLE IF NOT EXISTS property
(
	prop_id int(10) NOT NULL AUTO_INCREMENT,
    prop_create_dt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    prop_type varchar(5),
    landlord_id int(10),
    prop_active boolean,
    situs_prefix varchar(10),
    situs_num varchar(15),
    situs_street varchar(50),
    situs_suffix varchar(10),
    situs_city varchar(30),
    situs_state varchar(2),
    situs_zip varchar(10),
    image_id int(10),
    PRIMARY KEY (prop_id)    
);
    
    
CREATE TABLE IF NOT EXISTS  units
(
	unit_id int(10) NOT NULL auto_increment,
    unit_create_dt timestamp default current_timestamp,
    unit_type varchar(10),
    prop_id int(10),
    unit_active boolean,
    rent_amt numeric(10,2),
    utilities boolean,
    pets boolean,
    sqft int(10),
    bed int(10),
    bath int(10),
    bath_private boolean,
    living int(10),
    dining int(10),
    kitchen int(10),
    garage int(10),
    carport int(10),
    list_flag boolean,
    PRIMARY KEY (unit_id)
);

CREATE TABLE IF NOT EXISTS  landlord
(
	landlord_id int(10) NOT NULL auto_increment,
	landlord_create_dt timestamp default current_timestamp,
    salutation varchar(5),
    first_name varchar(30),
    middle_name varchar(30),
    last_name varchar(30),
    email varchar(60),
    phone1 varchar(10),
    phone1_type varchar(2),
    phone2 varchar(10),
    phone2_type varchar(2),
    addr1 varchar(50),
    addr2 varchar(50),
    addr_city varchar(30),
    addr_state varchar(2),
    addr_zip varchar(10),
    PRIMARY KEY (landlord_id)
);

CREATE TABLE IF NOT EXISTS  tenant
(
	tenant_id int(10) NOT NULL auto_increment,
	tenant_create_dt timestamp default current_timestamp,
    application_id int(10),
    salutation varchar(5),
    first_name varchar(30),
    middle_name varchar(30),
    last_name varchar(30),
    email varchar(60),
    phone1 varchar(10),
    phone1_type varchar(2),
    phone2 varchar(10),
    phone2_type varchar(2),
    addr1 varchar(50),
    addr2 varchar(50),
    addr_city varchar(30),
    addr_state varchar(2),
    addr_zip varchar(10),
    PRIMARY KEY (tenant_id)
);


CREATE TABLE IF NOT EXISTS  sub_tenant
(
	sub_tenant_id int(10) NOT NULL auto_increment,
	sub_tenant_create_dt timestamp default current_timestamp,
    tenant_id int(10),
    salutation varchar(5),
    first_name varchar(30),
    middle_name varchar(30),
    last_name varchar(30),
    email varchar(60),
    phone1 varchar(10),
    phone1_type varchar(2),
    phone2 varchar(10),
    phone2_type varchar(2),
    addr1 varchar(50),
    addr2 varchar(50),
    addr_city varchar(30),
    addr_state varchar(2),
    addr_zip varchar(10),
    PRIMARY KEY (sub_tenant_id)
);


CREATE TABLE IF NOT EXISTS  lease
(
	lease_id int(10) NOT NULL auto_increment,
	lease_create_dt timestamp default current_timestamp,
    unit_id int(10),
    tenant_id int(10),
    start_dt datetime,
    end_dt datetime,
    term_dt datetime,
    rent_amt numeric(10,2),
    PRIMARY KEY (lease_id)
);

CREATE TABLE IF NOT EXISTS images
(
	image_id int(10) NOT NULL auto_increment,
	ref_type varchar(5),
    ref_id int(10),
    image_path varchar(255),
    PRIMARY KEY (image_id)
);

CREATE TABLE IF NOT EXISTS application
(
	application_id int(10) NOT NULL auto_increment,
	application_dt	timestamp default current_timestamp,
	salutation varchar(5),
	first_name varchar(30),
	middle_name varchar(30),
	last_name varchar(30),
	email varchar(60),
	phone1 varchar(10),
	phone1_type	varchar(2),
	phone2 varchar(10),
	phone2_type	varchar(2),
	unit_id	int (10),
	lease_length int (10),
	num_occupants int (10),
    /*fixed move_id_dt to move_in_dt*/
	move_id_dt	datetime,
	addr1 varchar(50),
	addr2 varchar(50),
	addr_city varchar(30),
	addr_state varchar(2),
	addr_zip varchar(10),
	cur_rent NUMERIC(10,2),
	reason_leave varchar(255),
	emp_status varchar(15),
	emp_income NUMERIC(10,2),
	addl_income NUMERIC(10,2),
	addl_income_source varchar(60),
	emp_company	varchar(50),
	emp_job_title varchar(30),
	emp_addr1 varchar(50),
	emp_addr2 varchar(50),
	emp_city varchar(30),
	emp_state varchar(2),
	emp_zip	varchar(10),
	emp_phone varchar(10),
	emp_supervisor varchar(50),
	pet_num	int (10),
	pet_dog	BOOLEAN,
	pet_cat	BOOLEAN,
	pet_bird BOOLEAN,
	pet_fish BOOLEAN,
	pet_other BOOLEAN,
	pet_other_desc varchar(50),
	pet_spayed BOOLEAN,
	veh_num	int (10),
	veh_desc varchar(50),
    /*fixed spelling error in applicatiin_id*/
    PRIMARY KEY (application_id)
);

CREATE TABLE IF NOT EXISTS maintenance
(
	maint_id int(10) NOT NULL auto_increment,
	maint_create_dt timestamp default current_timestamp,
	tenant_id int(10),
	unit_id int(10),
	maint_category varchar(50),
	maint_desc varchar(255),
    appl_item varchar(30),
	appl_make varchar(30),
	appl_model varchar(30),
    PRIMARY KEY (maint_id)
);