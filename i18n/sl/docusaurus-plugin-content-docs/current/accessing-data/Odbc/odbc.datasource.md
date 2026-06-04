---
title: Odbc.DataSource
---

# Odbc.DataSource


Vrne tabelo tabel in pogledov SQL iz vira podatkov ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vrne tabelo tabel in pogledov SQL iz vira podatkov ODBC, ki je določen v nizu povezave `connectionString`. `connectionString` je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali število. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `CreateNavigationProperties` : Logična vrednost (true/false), ki določa, ali je treba za vrnjene vrednosti ustvariti lastnosti krmarjenja (privzeta vrednost je"true").
-   `HierarchicalNavigation` : Logična vrednost (true/false), ki nastavi, ali bodo tabele prikazane tako, da bodo združene v skupine po njihovih imenih sheme (privzeta vrednost je"false").
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je 15 sekund.
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `SqlCompatibleWindowsAuth` : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je"true".


## Examples

### Example #1
Pridobite tabele in poglede SQL iz navedenega niza povezave.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
