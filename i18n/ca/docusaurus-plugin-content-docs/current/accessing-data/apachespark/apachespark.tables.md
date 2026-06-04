---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Retorna una taula que enumera les taules del clúster de l'Spark especificat.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retorna una taula que enumera les taules del clúster de l'Spark `host` amb el `protocol`. Els protocols vàlids són: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Retorna una taula que enumera les taules del clúster de l'Spark especificat.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



