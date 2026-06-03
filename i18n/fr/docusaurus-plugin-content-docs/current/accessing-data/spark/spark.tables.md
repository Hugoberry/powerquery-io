---
title: Spark.Tables
---

# Spark.Tables


Retourne une table répertoriant les tables sur le cluster Spark spécifié.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retourne une table répertoriant les tables sur le cluster Spark `host` à l'aide de `protocol`. Les protocoles valides sont : SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Répertoriez les tables dans une instance d'Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



