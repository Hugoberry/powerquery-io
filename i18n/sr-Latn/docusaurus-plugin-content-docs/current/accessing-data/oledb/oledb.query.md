---
title: OleDb.Query
---

# OleDb.Query


Vraća rezultat pokretanja osnovnog upita na OLE DB izvoru podataka.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vraća rezultat pokretanja `query` sa niskom veze `connectionString` pomoću interfejsa OLE DB. `connectionString` može da bude tekst ili zapis parova vrednosti svojstva. Vrednosti svojstva mogu da budu tekst ili broj. Moguće je navesti opcionalni parametar zapisa, `options`, radi navođenja dodatnih svojstava. Zapis može da sadrži sledeća polja:

-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.



## Category
Accessing data
