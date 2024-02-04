---
title: Kusto.Contents
---

# Kusto.Contents


## Description

Hiermit werden Daten aus Azure Data Explorer (Kusto) importiert.


## Syntax

```powerquery
Kusto.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

Hiermit werden Daten aus Ihrer Azure Data Explorer-Instanz (Kusto) importiert.


## Examples

### Example #1 
Gibt eine Tabelle mit Storm Events-Informationen zurück.
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Eine Tabelle mit Storm-Ereignissen aus der Datenbank "Samples" im Cluster "help"
```



