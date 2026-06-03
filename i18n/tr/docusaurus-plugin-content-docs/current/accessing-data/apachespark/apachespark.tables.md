---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

`Protokol` kullanarak, tabloları Spark küme `ana bilgisayarında` listeleyen bir tablo döndürür. Geçerli protokoller şunlardır: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



