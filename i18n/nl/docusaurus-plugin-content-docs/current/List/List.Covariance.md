---
title: List.Covariance
---

# List.Covariance


## Description

Retourneert de covariantie tussen de twee lijsten met getallen.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Details

Retourneert de covariantie tussen de twee lijsten <code>numberList1</code> en <code>numberList2</code>. <code>numberList1</code> en <code>numberList2</code> moeten hetzelfde aantal <code>number</code>waarden bevatten.


## Examples

### Example #1 
De covariantie tussen de twee lijsten berekenen.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
