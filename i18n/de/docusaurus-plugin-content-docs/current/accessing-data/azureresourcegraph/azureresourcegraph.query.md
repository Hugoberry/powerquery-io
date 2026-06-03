---
title: AzureResourceGraph.Query
---

# AzureResourceGraph.Query



## Syntax

```powerquery
AzureResourceGraph.Query(
    query as text,
    optional scope as text,
    optional subscription as text,
    optional managementGroup as text,
    optional options as record
) as table
```


## Remarks

Beispiele für Startabfragen finden Sie unter https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Zurückgeben einer Tabelle mit Abfrageergebnissen der Benutzerabfrage "resources"
```powerquery
AzureResourceGraph.Query("resources")
```



