---
title: Spark.Tables
---

# Spark.Tables


Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

<code>Protokol</code> kullanarak, tabloları Spark küme <code>ana bilgisayarında</code> listeleyen bir tablo döndürür.  Geçerli protokoller şunlardır:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Tabloları bir Azure Spark örneğinde listeleyin.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



