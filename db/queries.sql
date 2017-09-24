use kodus_react;


/*---- Get data on all units ---- */
SELECT * 
FROM property as p
INNER JOIN units as u
ON p.prop_id = u.prop_id
LEFT OUTER JOIN landlord as ll
ON p.landlord_id = ll.landlord_id
LEFT OUTER JOIN lease as l
ON u.unit_id = l.unit_id
LEFT OUTER JOIN tenant as t
ON t.tenant_id = l.tenant_id



/*---- Get data on only leased units ---- */
SELECT * 
FROM property as p
INNER JOIN units as u
ON p.prop_id = u.prop_id
INNER JOIN landlord as ll
ON p.landlord_id = ll.landlord_id
INNER JOIN lease as l
ON u.unit_id = l.unit_id
INNER JOIN tenant as t
ON t.tenant_id = l.tenant_id


/*---- Get data on units without a lease ---- */
SELECT * 
FROM property as p
INNER JOIN units as u
ON p.prop_id = u.prop_id
INNER JOIN landlord as ll
ON p.landlord_id = ll.landlord_id
WHERE u.unit_id not in 
(select unit_id from lease) 


/*---- Get property and additional images on units  */
SELECT p.prop_id, u.unit_id, ip.image_path 
FROM property as p
INNER JOIN units as u
ON p.prop_id = u.prop_id
INNER JOIN images as ip
ON ip.ref_type = 'P'
and p.prop_id = ip.ref_id
UNION
SELECT p.prop_id, u.unit_id, iu.image_path 
FROM property as p
INNER JOIN units as u
ON p.prop_id = u.prop_id
INNER JOIN images as iu
ON iu.ref_type = 'U'
and u.unit_id = iu.ref_id

