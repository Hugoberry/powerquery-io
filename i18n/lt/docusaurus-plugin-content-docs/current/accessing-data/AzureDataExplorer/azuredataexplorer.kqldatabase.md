---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Importuoti duomenis iš „Fabric Kusto“ sankaupos aptikimo režimu.


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

Importuoja duomenis iš jūsų KQL duomenų bazės egzemplioriaus


## Examples

### Example #1
Pateikiama audrų reiškinių informacijos lentelė
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Audrų reiškinių lentelė iš žinyno sankaupos duomenų bazės Pavyzdžiai
```



