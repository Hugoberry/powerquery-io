---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


Importuoja duomenis iš „Azure“ duomenų naršyklės („Kusto“)


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

Importuoja duomenis iš „Azure“ duomenų naršyklės („Kusto“) egzemplioriaus


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



