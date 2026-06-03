---
title: List.Covariance
---

# List.Covariance


2 つの数のリストの間の共分散を返します。


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

`numberList1` と `numberList2` の 2 つのリストの間の共分散を返します。`numberList1` と `numberList2` には同じ数の `number` 値が含まれている必要があります。


## Examples

### Example #1
2 つのリストの間の共分散を計算します。
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
