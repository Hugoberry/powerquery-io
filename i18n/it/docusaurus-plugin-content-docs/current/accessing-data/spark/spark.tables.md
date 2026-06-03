---
title: Spark.Tables
---

# Spark.Tables


Restituisce una tabella che elenca le tabelle nel cluster Spark specificato.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca le tabelle nell'`host` del cluster Spark usando l'oggetto `protocol`. I protocolli validi sono: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Elenca le tabelle in un'istanza di Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



