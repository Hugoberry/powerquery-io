---
title: Spark.Tables
---

# Spark.Tables


## Description

Devuelve una tabla que enumera las tablas del clúster de Spark especificado.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Devuelve una tabla que enumera las tablas del clúster de Spark <code>host</code>, mediante <code>protocol</code>. Los protocolos válidos son:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Lista de tablas en una instancia de Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



