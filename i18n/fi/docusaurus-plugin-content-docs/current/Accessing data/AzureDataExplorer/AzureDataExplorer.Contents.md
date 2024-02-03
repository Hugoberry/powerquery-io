---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

Tuo tietoja Azure Data Explorerista (Kusto)


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

Tuo tietoja Azure Data Explorer (Kusto) -esiintymästä


## Examples

### Example #1 
Palauttaa myrskytapahtumatietojen taulukon
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
Ohjeklusterin Näytteet-tietokannan taulukko, joka sisältää tietoja myrskytapahtumista
```



