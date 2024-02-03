---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

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


## Details

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



