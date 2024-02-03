---
title: Impala.Database
---

# Impala.Database


## Description

Uvozite podatke iz gruče Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Uvozite podatke iz gruče Impala <code>server</code>. Če vrat niste navedli, bodo uporabljena privzeta vrata 21050.


## Examples

### Example #1 
Navedite tabele v gruči Impala.
```powerquery
Impala.Database("localhost:21050")
```



