---
title: Spark.Tables
---

# Spark.Tables


## Description

Retourne une table répertoriant les tables sur le cluster Spark spécifié.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Retourne une table répertoriant les tables sur le cluster Spark <code>host</code> à l'aide de <code>protocol</code>. Les protocoles valides sont :SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Répertoriez les tables dans une instance d&#39;Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



