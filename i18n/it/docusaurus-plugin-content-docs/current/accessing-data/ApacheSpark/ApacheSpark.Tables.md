---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Restituisce una tabella che elenca le tabelle nel cluster Spark specificato.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Restituisce una tabella che elenca le tabelle nell'<code>host</code> del cluster Spark usando l'oggetto <code>protocol</code>. I protocolli validi sono:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Restituisce una tabella che elenca le tabelle nel cluster Spark specificato.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



