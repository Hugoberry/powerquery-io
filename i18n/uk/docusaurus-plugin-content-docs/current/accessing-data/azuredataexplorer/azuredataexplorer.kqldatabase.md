---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Імпорт даних із кластера Fabric Kusto в режимі виявлення.


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

Імпортує дані з екземпляра бази даних KQL


## Examples

### Example #1
Повертає таблицю з відомостями про бурі
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Таблиця з відомостями про бурі з бази даних "Samples" у кластері "help"
```



