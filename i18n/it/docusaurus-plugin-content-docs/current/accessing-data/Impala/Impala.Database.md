---
title: Impala.Database
---

# Impala.Database


Importa i dati da un cluster Impala


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importa i dati da un cluster Impala <code>server</code>. Se non è stata specificata una porta, verrà usata la porta predefinita 21050.


## Examples

### Example #1 
Elenca le tabelle in un cluster Impala.
```powerquery
Impala.Database("localhost:21050")
```



