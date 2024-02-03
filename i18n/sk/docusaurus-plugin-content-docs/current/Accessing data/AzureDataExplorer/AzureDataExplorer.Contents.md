---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Importuje údaje z Azure Data Explorera (Kusto)


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

Importuje údaje z vašej inštancie Azure Data Explorera (Kusto)


## Examples

### Example #1 
Vráti tabuľku s informáciami o udalostiach Storm
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Tabuľka s udalosťami Storm z databázy Samples v klastri Help
```



