CREATE VIEW vw_restaurants AS SELECT ID, UUID, RESTAURANT_NAME, FULL_ADRESS FROM restaurants WHERE DELETED_AT IS NULL;