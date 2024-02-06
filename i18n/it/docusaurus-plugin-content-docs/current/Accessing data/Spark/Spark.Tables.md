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

Restituisce una tabella che elenca le tabelle nell'<code>host</code> del cluster Spark usando l'oggetto <code>protocol</code>. I protocolli validi sono:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Elenca le tabelle in un&#39;istanza di Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



