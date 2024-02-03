---
title: Odbc.Query
---

# Odbc.Query


## Description

Egy natív lekérdezés ODBC-adatforráson való futtatásának eredményét adja vissza.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

A(z) <code>query</code> a(z) <code>connectionString</code> kapcsolati sztringgel és az ODBC-vel való futtatásának eredményét adja vissza. A(z) <code>connectionString</code> szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) <code>options</code> elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>ConnectionTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a rendszer mennyi ideig v&#225;rjon, mielőtt feladja a kiszolg&#225;l&#243;hoz val&#243; csatlakoz&#225;si k&#237;s&#233;rletet. Az alap&#233;rtelmezett &#233;rt&#233;k 15 m&#225;sodperc.</li><li><code>CommandTimeout</code> : Egy időtartam, amely azt vez&#233;rli, hogy a kiszolg&#225;l&#243;oldali lek&#233;rdez&#233;s mennyi ideig futhat, mielőtt megszakadna. Az alap&#233;rtelmezett &#233;rt&#233;k t&#237;z perc.</li><li><code>SqlCompatibleWindowsAuth</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza, hogy l&#233;trej&#246;jjenek-e SQL Server-kompatibilis kapcsolatisztring-be&#225;ll&#237;t&#225;sok a Windows-hiteles&#237;t&#233;shez. Az alap&#233;rtelmezett &#233;rt&#233;k true (igaz).</li></ul>


## Examples

### Example #1 
Egyszerű lekérdezés futtatásának eredményét küldi vissza a megadott kapcsolati sztring alapján.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data