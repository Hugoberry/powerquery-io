---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Devolve unha táboa que enumera as táboas do clúster Spark especificado.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Devolve unha táboa que enumera as táboas do <code>host</code> do clúster Spark mediante o uso de <code>protocol</code>. Os protocolos válidos son:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Devolve unha táboa que enumera as táboas do clúster Spark especificado.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



