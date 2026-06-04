---
title: Spark.Tables
---

# Spark.Tables


Devolve unha táboa que enumera as táboas do clúster Spark especificado.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Devolve unha táboa que enumera as táboas do `host` do clúster Spark mediante o uso de `protocol`. Os protocolos válidos son: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Enumere as táboas dunha instancia de Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



