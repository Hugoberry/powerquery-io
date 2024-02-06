---
title: Impala.Database
---

# Impala.Database


Importuj dane z klastra Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importuj dane z klastra Impala <code>server</code>. Jeśli nie określono portu, zostanie użyty port domyślny 21050.


## Examples

### Example #1 
Wyświetl listę tabel w klastrze Impala.
```powerquery
Impala.Database("localhost:21050")
```



