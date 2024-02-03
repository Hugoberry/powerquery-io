---
title: Impala.Database
---

# Impala.Database


## Description

Impala кластерінен деректерді импорттаңыз


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Details

Impala кластерінен <code>server</code> деректерді импорттаңыз. Егер порт көрсетілмесе, әдепкі порт 21050 болады.


## Examples

### Example #1 
Impala кластерінде кестелерді тізімдейді.
```powerquery
Impala.Database("localhost:21050")
```



