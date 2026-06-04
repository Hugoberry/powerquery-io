---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


Tuo tietoja Fabric Kusto -klusterista etsintätilassa.


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

Tuo tietoja KQL-tietokantaesiintymästä


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



