---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>Protokol</code> kullanarak, tabloları Spark küme <code>ana bilgisayarında</code> listeleyen bir tablo döndürür.  Geçerli protokoller şunlardır:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Tabloları belirtilen Spark kümesinde listeleyen bir tablo döndürür.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



