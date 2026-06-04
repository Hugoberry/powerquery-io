---
title: Spark.Tables
---

# Spark.Tables


Pateikiama lentelė, kurioje išvardijamos nurodyto „Spark“ blokinio lentelės.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Pateikiama lentelė, kurioje išvardijamos „Spark“ blokinio `host` lentelės, naudojančios `protocol`. Tinkami protokolai: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Nurodykite lenteles „Azure Spark“ egzemplioriuje.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



