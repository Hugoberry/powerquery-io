---
title: Impala.Database
---

# Impala.Database


Importera data från ett Impala-kluster


## Syntax

```powerquery
Impala.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Importera data från Impala-klustret <code>server</code>. Om du inte anger någon port används standardporten 21050.


## Examples

### Example #1 
Lista tabellerna i ett Impala-kluster.
```powerquery
Impala.Database("localhost:21050")
```



