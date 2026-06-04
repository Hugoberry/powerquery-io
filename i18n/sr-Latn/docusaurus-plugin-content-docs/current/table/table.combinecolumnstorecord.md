---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Kombinuje navedene kolone u novu kolonu sa vrednostima zapisa, pri čemu svaki zapis sadrži imena i vrednosti polja koji odgovaraju imenima i vrednostima kolona koje su kombinovane.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Kombinuje navedene kolone za `table` u novu kolonu sa zapisima pod imenom `newColumnName`, pri čemu svaki zapis ima imena i vrednosti polja koja odgovaraju imenima i vrednostima kolona koje se kombinuju. Ako se za `options` navede zapis, mogu se navesti sledeće opcije:

-   `DisplayNameColumn`: Kada se navede kao tekst, pokazuje da dato ime kolone treba tretirati kao ime za prikaz zapisa. To ne mora da bude neka od kolona iz samog zapisa.
-   `TypeName`: Kada se navede kao tekst, navodi ime logičkog tipa za dobijeni zapis, koje se može koristiti tokom učitavanja podataka za podsticanje ponašanja okruženja koje obavlja učitavanje.



## Category
Table.Transformation
