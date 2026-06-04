---
title: Snowflake.Databases
---

# Snowflake.Databases


Uvozite podatke iz podatkovnega skladišča Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo s seznamom tabel v `podatkovnem skladišču` Snowflake Computing, ki je v `strežniku`. Določite lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `Role`: besedilna vrednost, ki bo uporabljena kot ime vloge za povezavo.
-   `CreateNavigationProperties`: logična vrednost (true/false), ki nastavi, ali bodo za vrnjene vrednosti ustvarjenje lastnosti krmarjenja (privzeta vrednost je"true").
-   `ConnectionTimeout`: koliko sekund je treba počakati na odzive omrežja iz storitve Snowflake.
-   `CommandTimeout`: koliko sekund je treba počakati na izvedbo poizvedbe.


## Examples

### Example #1
Ustvarite seznam tabel v podatkovnem skladišču Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



