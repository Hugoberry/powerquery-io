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

Lihat https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli untuk melihat sampel kueri permulaan.


## Examples

### Example #1
Menghasilkan tabel dengan hasil kueri dari kueri pengguna 'sumber daya'
```powerquery
AzureResourceGraph.Query("resources")
```



