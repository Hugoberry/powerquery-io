---
title: Spark.Tables
---

# Spark.Tables


## Description

Pateikiama lentelė, kurioje išvardijamos nurodyto „Spark“ blokinio lentelės.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Pateikiama lentelė, kurioje išvardijamos „Spark“ blokinio <code>host</code> lentelės, naudojančios <code>protocol</code>.  Tinkami protokolai:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Nurodykite lenteles „Azure Spark“ egzemplioriuje.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



