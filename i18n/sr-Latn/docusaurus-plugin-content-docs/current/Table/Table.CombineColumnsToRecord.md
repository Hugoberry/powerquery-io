---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Kombinuje navedene kolone za <code>table</code> u novu kolonu sa zapisima pod imenom <code>newColumnName</code>, pri čemu svaki zapis ima imena i vrednosti polja koja odgovaraju imenima i vrednostima kolona koje se kombinuju. Ako se za <code>options</code> navede zapis, mogu se navesti sledeće opcije:    <ul>     <li> <code>DisplayNameColumn</code>: Kada se navede kao tekst, pokazuje da dato ime kolone treba tretirati kao ime za prikaz zapisa. To ne mora da bude neka od kolona iz samog zapisa.</li>     <li> <code>TypeName</code>: Kada se navede kao tekst, navodi ime logičkog tipa za dobijeni zapis, koje se može koristiti tokom učitavanja podataka za podsticanje ponašanja okruženja koje obavlja učitavanje.</li>    </ul>    



## Category
Table.Transformation
