GO
CREATE PROCEDURE CREATE_USER
    @name NVARCHAR(100), @dni NVARCHAR(100), @phone NVARCHAR(100), @city NVARCHAR(100), @province NVARCHAR(100)
AS
    INSERT INTO Users(name, dni, phone, city, province) VALUES (@name, @dni, @phone, @city, @province);

	  SELECT SCOPE_IDENTITY() AS id;
GO


GO
CREATE PROCEDURE CREATE_USER_INTERESTS
    @userId int, @title NVARCHAR(100)
AS
    INSERT INTO UserInterests(userId, title)
	VALUES (@userId, @title);
GO


GO
CREATE PROCEDURE DELETE_INTEREST_BY_USERID
	@userId int
AS
	DELETE FROM UserInterests WHERE userId = @userId;
GO


GO
CREATE PROCEDURE DELETE_USER_BY_ID
	@userId int
AS
	DELETE FROM UserInterests WHERE userId = @userId;
	DELETE FROM Users WHERE id = @userId;
GO


GO
CREATE PROCEDURE UPDATE_USER
	@id INT, @name NVARCHAR(100), @dni NVARCHAR(100), @phone NVARCHAR(100), @city NVARCHAR(100), @province NVARCHAR(100)
AS
    UPDATE Users SET
	name = @name,
	dni = @dni,
	phone = @phone,
	city = @city,
	province = @province
	WHERE id = @id
GO