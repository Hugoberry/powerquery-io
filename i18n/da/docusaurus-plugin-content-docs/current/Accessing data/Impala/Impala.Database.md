---
title: Impala.Database
---

# Impala.Database


Importér data fra en Impala-klynge


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importér data fra en Impala-klynge <code>server</code>. Hvis der ikke er angivet en port, anvendes standardporten 21050.


## Examples

### Example #1 
Vis en oversigt over tabellerne i en Impala-klynge.
```powerquery
Impala.Database("localhost:21050")
```



