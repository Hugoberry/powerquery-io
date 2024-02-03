---
title: Vertica.Database
---

# Vertica.Database


## Description

Uvozite podatke iz platforme Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo shem, ki so na voljo v strežniku, poimenovanem s parametrom <code>server</code> v zbirki podatkov, poimenovani s parametrom <code>database</code>.Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:<ul>    <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li>    <li><code>CommandTimeout </code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.</li></ul>


## Examples

### Example #1 
Navedite tabele v platformi Vertica
```powerquery

```



