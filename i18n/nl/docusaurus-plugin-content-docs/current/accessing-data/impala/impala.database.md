---
title: Impala.Database
---

# Impala.Database


Gegevens importeren uit een Impala-cluster


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Gegevens importeren uit een Impala-cluster <code>server</code>. Als er geen poort is opgegeven, wordt de standaardpoort 21050 gebruikt.


## Examples

### Example #1 
Een lijst met de tabellen in een Impala-cluster weergeven.
```powerquery
Impala.Database("localhost:21050")
```



