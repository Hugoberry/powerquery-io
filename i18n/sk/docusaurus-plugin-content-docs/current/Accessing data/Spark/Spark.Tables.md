---
title: Spark.Tables
---

# Spark.Tables


## Description

Vráti tabuľku, ktorá uvádza tabuľky zadané v klastri Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Vráti tabuľku, ktorá uvádza tabuľky v hostiteľovi <code>host</code> klastra Spark, použitím protokolu <code>protocol</code>. Platné protokoly sú:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Zobrazte zoznam tabuliek v inštancii riešenia Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



