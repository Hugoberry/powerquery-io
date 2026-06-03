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

स्टार्टर क्वेरी नमूनों के लिए https://learn.microsoft.com/azure/governance/resource-graph/samples/starter?tabs=azure-cli देखें.


## Examples

### Example #1
उपयोगकर्ता क्वेरी 'संसाधन' के क्वेरी परिणामों के साथ एक तालिका लौटाएँ
```powerquery
AzureResourceGraph.Query("resources")
```



