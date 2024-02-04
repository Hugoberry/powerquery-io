---
title: Impala.Database
---

# Impala.Database


## Description

Importiert Daten aus einem Impala-Cluster.


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importiert Daten aus einem Impala-Cluster <code>server</code>. Wenn kein Port angegeben wurde, wird standardmäßig Port 21050 verwendet.


## Examples

### Example #1 
Listet die Tabellen in einem Impala-Cluster auf.
```powerquery
Impala.Database("localhost:21050")
```



