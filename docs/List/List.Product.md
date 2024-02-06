---
title: List.Product
---

# List.Product


Returns the product of the numbers in the list.


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

Returns the product of the non-null numbers in the list, <code>numbersList</code>. Returns null if there are no non-null values in the list.


## Examples

### Example #1 
Find the product of the numbers in the list &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
