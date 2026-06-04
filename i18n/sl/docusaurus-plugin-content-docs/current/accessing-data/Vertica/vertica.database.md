---
title: Vertica.Database
---

# Vertica.Database


Uvozite podatke iz platforme Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo shem, ki so na voljo v strežniku, poimenovanem s parametrom `server` v zbirki podatkov, poimenovani s parametrom `database`. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `ConnectionTimeout`: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `CommandTimeout` : trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.


## Examples

### Example #1
Navedite tabele v platformi Vertica
```powerquery

```



