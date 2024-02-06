---
title: Spark.Tables
---

# Spark.Tables


Zwraca tabelę z listą tabel w określonym klastrze platformy Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z listą tabel w elemencie <code>host</code> klastra platformy Spark używającego elementu <code>protocol</code>. Prawidłowe protokoły:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Wyświetl tabele w wystąpieniu usługi Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



