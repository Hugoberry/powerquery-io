---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


Azure Veri Gezgini&#39;nden (Kusto) verileri içeri aktarır


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

Azure Veri Gezgini (Kusto) örneğinizden verileri içeri aktarır


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



