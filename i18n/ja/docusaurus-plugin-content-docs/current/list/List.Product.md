---
title: List.Product
---

# List.Product


リスト内の数の積を返します。


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

リスト <code>numbersList</code> 内の NULL 以外の数の積を返します。リストに NULL 以外の値がない場合、NULL を返します。


## Examples

### Example #1 
リスト &lt;code&gt;\{1, 2, 3, 3, 4, 5, 5}&lt;/code&gt; 内の数の積を求めます。
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
