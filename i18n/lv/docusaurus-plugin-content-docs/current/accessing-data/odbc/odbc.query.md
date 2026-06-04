---
title: Odbc.Query
---

# Odbc.Query


Atgriež rezultātu, kas iegūts, palaižot iekšēju vaicājumu ODBC datu avotā.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Izmantojot ODBC, tiek atgriezts `query` palaišanas rezultāts ar savienojuma virkni `connectionString`. `connectionString` var būt teksts vai rekvizīta vērtību pāru ieraksts. Rekvizīta vērtības var būt teksts vai skaitlis. Lai norādītu papildu rekvizītus, var tikt norādīts ieraksta izvēles parametrs `options`. Ierakstā var būt šādi lauki:

-   `ConnectionTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir 15 sekundes.
-   `CommandTimeout` : Ilgums, kurš tiek izmantots, lai noteiktu, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts. Noklusējuma vērtība ir desmit minūtes.
-   `SqlCompatibleWindowsAuth` : Loģiskais operators (True/False), kas nosaka, vai izveidot ar SQL Server saderīgas savienojuma virknes opcijas, ko izmantot Windows autentifikācijas procesā. Noklusējuma vērtība ir True.


## Examples

### Example #1
Tiek atgriezts rezultāts, kas iegūts, izpildot vienkāršu vaicājumu ar norādīto savienojuma virkni.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
