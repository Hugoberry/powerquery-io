---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Keşif modunda Fabric Kusto kümesinden veri aktarın.


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

KQL Veritabanı örneğinizden verileri içe aktarır


## Examples

### Example #1
Storm Olayları bilgilerinin bir tablosunu döndürür
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
"Yardım" kümesindeki "Örnekler" veritabanından Storm Olaylarını içeren tablo
```



