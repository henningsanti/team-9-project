START TRANSACTION;
INSERT
	INTO Client_Information(id, fullname, address1, address2, city, state, zipcode)
    VALUES ('ID','NAME', 'ADDRESS', 'ADDRESS', 'CITY', 'STATE', 'ZIPCODE');
INSERT
	INTO User_Login(id,username, password)
    VALUES ('ID','USERNAME', 'PASSWORD');
INSERT 
	INTO Quote_History(id, userid, gallons, deliveryaddress, deliverydate, suggestedprice, amountdue)
    VALUES ('ID', 'USERID', 'GALLONS', 'DELIVERYADDRESS', 'DELIVERYDATE', 'SUGGESTEDPRICE', 'AMOUNTDUE');
COMMIT;
