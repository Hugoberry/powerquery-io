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

Katso kyselyiden aloitusesimerkit: https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli.


## Examples

### Example #1
Palauta taulukko, jossa on käyttäjän ‘resurssit’-kyselyn tulokset
```powerquery
AzureResourceGraph.Query("resources")
```



