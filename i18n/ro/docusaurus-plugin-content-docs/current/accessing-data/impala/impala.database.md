---
title: Impala.Database
---

# Impala.Database


Importați date dintr-un cluster Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importați date dintr-un cluster Impala `server`. Dacă nu s-a specificat un port, se va utiliza portul implicit 21050.


## Examples

### Example #1
Listați tabelele dintr-un cluster Impala.
```powerquery
Impala.Database("localhost:21050")
```



