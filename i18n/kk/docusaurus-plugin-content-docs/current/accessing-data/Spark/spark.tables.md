---
title: Spark.Tables
---

# Spark.Tables


Көрсетілген Spark кластеріндегі кестелер көрсетілген кестені қайтарады.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Spark кластері `хостындағы` кестелерді тізбектейтін `протоколды` пайдаланып кестелерді қайтарады. Жарамды протоколдар: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Azure Spark данасындағы кестелерді тізімдеңіз.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



