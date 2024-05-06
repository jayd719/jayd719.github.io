import mysql.connector
mydb = mysql.connector.connect(
  host="35.183.44.11",
  user="myuser",
  password="Thisisfun@1",
  database="test"
)
mycursor = mydb.cursor()
mycursor.execute("SELECT * FROM Orders WHERE OrderID =1 AND Processed='false'")


myresult = mycursor.fetchall()

for x in myresult:
  print(x)
  
print('hh')