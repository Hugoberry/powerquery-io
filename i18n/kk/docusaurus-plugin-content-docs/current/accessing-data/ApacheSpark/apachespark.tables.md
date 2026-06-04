---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Көрсетілген Spark кластеріндегі кестелер көрсетілген кестені қайтарады.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Spark кластері `хостындағы` кестелерді тізбектейтін `протоколды` пайдаланып кестелерді қайтарады. Жарамды протоколдар: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Көрсетілген Spark кластеріндегі кестелер көрсетілген кестені қайтарады.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



