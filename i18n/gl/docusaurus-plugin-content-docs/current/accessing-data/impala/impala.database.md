---
title: Impala.Database
---

# Impala.Database


Importa datos dun clúster de Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importa datos dun clúster de Impala `server`. Se non se especificou ningún porto, o porto predefinido que se usará será 21050.


## Examples

### Example #1
Enumera as táboas nun clúster de Impala.
```powerquery
Impala.Database("localhost:21050")
```



