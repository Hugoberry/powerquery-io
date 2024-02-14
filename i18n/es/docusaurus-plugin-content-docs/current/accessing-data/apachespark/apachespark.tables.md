---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Devuelve una tabla que enumera las tablas del clúster de Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que enumera las tablas del clúster de Spark <code>host</code>, mediante <code>protocol</code>. Los protocolos válidos son:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Devuelve una tabla que enumera las tablas del clúster de Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



