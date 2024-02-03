---
title: List.Product
---

# List.Product


## Description

傳回清單中數字的乘積。


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Details

傳回清單 <code>numbersList</code> 中非 null 數字的乘積。如果清單中沒有非 Null 值，則傳回 Null。


## Examples

### Example #1 
找出清單 &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 中數字的乘積。
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
