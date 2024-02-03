---
title: Impala.Database
---

# Impala.Database


## Description

Importa datos de un clúster de Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Importa datos de un clúster de Impala <code>server</code>. Se no se ha especificado ningún puerto, el puerto predeterminado que se usará será 21050.


## Examples

### Example #1 
Enumera las tablas en un clúster de Impala.
```powerquery
Impala.Database("localhost:21050")
```



