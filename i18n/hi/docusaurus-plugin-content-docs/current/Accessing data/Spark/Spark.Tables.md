---
title: Spark.Tables
---

# Spark.Tables


निर्दिष्ट स्पार्क क्लस्टर पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

<code>प्रोटोकॉल</code> का उपयोग करके स्पार्क क्लस्टर <code>होस्ट</code> पर तालिकाओं को सूचीबद्ध करने वाली तालिका लौटाता है.  मान्य प्रोटोकॉल हैं:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Azure स्पार्क इंस्टैंस में तालिकाओं को सूचीबद्ध करें.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



