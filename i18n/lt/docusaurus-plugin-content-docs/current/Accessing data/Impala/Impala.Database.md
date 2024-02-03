---
title: Impala.Database
---

# Impala.Database


## Description

Importuoti duomenis iš „Impala“ klasterio


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importuokite duomenis iš „Impala“ klasterio <code>server</code>. Jei prievadas nenurodytas, bus naudojamas numatytasis prievadas 21050.


## Examples

### Example #1 
Pateikiamas lentelių „Impala“ klasteryje sąrašas.
```powerquery
Impala.Database("localhost:21050")
```



