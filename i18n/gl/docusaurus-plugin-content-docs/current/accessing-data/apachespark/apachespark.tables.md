---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Devolve unha táboa que enumera as táboas do clúster Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que enumera as táboas do `host` do clúster Spark mediante o uso de `protocol`. Os protocolos válidos son: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Devolve unha táboa que enumera as táboas do clúster Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



