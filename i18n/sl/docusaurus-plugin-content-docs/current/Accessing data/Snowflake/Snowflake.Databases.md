---
title: Snowflake.Databases
---

# Snowflake.Databases


## Description

Uvozite podatke iz podatkovnega skladišča Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Details

Vrne tabelo s seznamom tabel v <code>podatkovnem skladišču</code> Snowflake Computing, ki je v <code>strežniku</code>. Določite lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:<ul><li><code>Role</code>: besedilna vrednost, ki bo uporabljena kot ime vloge za povezavo.</li><li><code>CreateNavigationProperties</code>: logična vrednost (true/false), ki nastavi, ali bodo za vrnjene vrednosti ustvarjenje lastnosti krmarjenja (privzeta vrednost je "true").</li><li><code>ConnectionTimeout</code>: koliko sekund je treba počakati na odzive omrežja iz storitve Snowflake.</li><li><code>CommandTimeout</code>: koliko sekund je treba počakati na izvedbo poizvedbe.</li></ul>    


## Examples

### Example #1 
Ustvarite seznam tabel v podatkovnem skladišču Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



