---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

निर्दिष्ट स्पार्क क्लस्टर पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>प्रोटोकॉल</code> का उपयोग करके स्पार्क क्लस्टर <code>होस्ट</code> पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.  मान्य प्रोटोकॉल हैं:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
निर्दिष्ट स्पार्क क्लस्टर पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



