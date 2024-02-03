---
title: Impala.Database
---

# Impala.Database


## Description

Importați date dintr-un cluster Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importați date dintr-un cluster Impala <code>server</code>. Dacă nu s-a specificat un port, se va utiliza portul implicit 21050.


## Examples

### Example #1 
Listați tabelele dintr-un cluster Impala.
```powerquery
Impala.Database("localhost:21050")
```



