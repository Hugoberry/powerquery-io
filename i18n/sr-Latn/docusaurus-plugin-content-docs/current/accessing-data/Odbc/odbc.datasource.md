---
title: Odbc.DataSource
---

# Odbc.DataSource


Vraća tabelu SQL tabela i prikaza iz ODBC izvora podataka.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Vraća tabelu SQL tabela i prikaza iz ODBC izvora podataka koju navodi niska veze `connectionString`. `connectionString` može biti tekst ili zapis parova vrednosti svojstava. Vrednosti svojstava mogu da budu tekst ili broj. Opcionalni parametar zapisa, `options`, može da se obezbedi da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `CreateNavigationProperties` : Logička vrednost (true/false) koja određuje da li će se generisati svojstva navigacije za vraćene vrednosti (podrazumevana vrednost je true).
-   `HierarchicalNavigation` : Logička vrednost (true/false) koja određuje da li će se tabele prikazivati grupisane po imenima šema (podrazumevana vrednost je false).
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost je 15 sekundi.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost je deset minuta.
-   `SqlCompatibleWindowsAuth` : Logička vrednost (true/false) koja određuje da li se stvaraju opcije niske veze kompatibilne sa SQL serverom za Windows potvrdu identiteta. Podrazumevana vrednost je true.


## Examples

### Example #1
Vraćanje SQL tabela i prikaza iz navedene niske veze.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
