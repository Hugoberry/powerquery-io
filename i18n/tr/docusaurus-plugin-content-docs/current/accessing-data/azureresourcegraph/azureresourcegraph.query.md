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

Başlangıç sorgu örnekleri için https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli adresine bakın.


## Examples

### Example #1
'Resources' kullanıcı sorgusunun sonuçlarını içeren bir tablo döndür
```powerquery
AzureResourceGraph.Query("resources")
```



