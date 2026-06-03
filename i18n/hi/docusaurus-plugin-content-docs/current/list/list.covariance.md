---
title: List.Covariance
---

# List.Covariance


संख्याओं की दो सूचियों के बीच सहप्रसरण लौटाता है.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

दो सूचियों `numberList1` और `numberList2` के बीच सहप्रसरण लौटाता है. `numberList1` और `numberList2` में `number` मानों की समान संख्या होनी चाहिए.


## Examples

### Example #1
दो सूचियों के बीच सहप्रसरण का परिकलन करें.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
