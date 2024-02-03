---
title: List.Covariance
---

# List.Covariance


## Description

संख्याओं की दो सूचियों के बीच सहप्रसरण लौटाता है.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

दो सूचियों <code>numberList1</code> और <code>numberList2</code> के बीच सहप्रसरण लौटाता है. <code>numberList1</code> और <code>numberList2</code> में <code>number</code> मानों की समान संख्या होनी चाहिए.


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
