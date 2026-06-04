---
title: Odbc.Query
---

# Odbc.Query


Vrne rezultat izvajajoče se izvorne poizvedbe v viru podatkov ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vrne rezultat izvajajoče se poizvedbe `query` z nizom povezave `connectionString`, ki uporablja ODBC. `connectionString` je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali številka. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je 15 sekund.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `SqlCompatibleWindowsAuth` : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je"true".


## Examples

### Example #1
Pridobite rezultat zagona preproste poizvedbe v navedenem nizu povezave.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
