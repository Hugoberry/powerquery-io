---
title: Spark.Tables
---

# Spark.Tables


## Description

Retorna una taula que enumera les taules del clúster de l&#39;Spark especificat.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Retorna una taula que enumera les taules del clúster de l'Spark <code>host</code> amb el <code>protocol</code>.  Els protocols vàlids són:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Enumera les taules d&#39;una instància de l&#39;Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



