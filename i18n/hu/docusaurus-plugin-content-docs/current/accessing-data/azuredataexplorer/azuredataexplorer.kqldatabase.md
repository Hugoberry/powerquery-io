---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Adatok importálása a Fabric Kusto-fürtből felderítési módban.


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

Adatok importálása a KQL-adatbázispéldányból


## Examples

### Example #1
A Storm-események információit tartalmazó táblát adja vissza
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
A „súgó” fürtben lévő „Samples” adatbázisból származó Storm-események táblája
```



