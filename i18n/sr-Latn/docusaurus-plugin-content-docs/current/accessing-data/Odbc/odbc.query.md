---
title: Odbc.Query
---

# Odbc.Query


Vraća rezultat pokretanja osnovnog upita na ODBC izvoru podataka.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Vraća rezultat pokretanja `query` sa niskom veze `connectionString` pomoću interfejsa ODBC. `connectionString` može biti tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, `options`, može da se obezbedi da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost je 15 sekundi.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.


## Examples

### Example #1
Vraćanje rezultata pokretanja jednostavnog upita u odnosu na obezbeđenu nisku veze.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
