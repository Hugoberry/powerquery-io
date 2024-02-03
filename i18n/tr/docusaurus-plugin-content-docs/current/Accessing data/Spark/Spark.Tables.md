---
title: Spark.Tables
---

# Spark.Tables


## Description

Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>Protokol</code> kullanarak, tabloları Spark küme <code>ana bilgisayarında</code> listeleyen bir tablo döndürür.  Geçerli protokoller şunlardır:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Tabloları bir Azure Spark örneğinde listeleyin.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



