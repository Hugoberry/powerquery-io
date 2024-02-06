---
title: List.Covariance
---

# List.Covariance


Returns the covariance between the two lists of numbers.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Returns the covariance between two lists, <code>numberList1</code> and <code>numberList2</code>. <code>numberList1</code> and <code>numberList2</code> must contain the same number of <code>number</code> values.


## Examples

### Example #1 
Calculate the covariance between two lists.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
