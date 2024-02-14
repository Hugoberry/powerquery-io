---
title: List.Range
---

# List.Range


オフセットで始まるリストのサブセットを返します。


## Syntax

```powerquery
List.Range(
    list as list,
    offset as number,
    optional count as number
) as list
```


## Remarks

オフセット <code>list</code> で始まるリストのサブセットを返します。省略可能なパラメーター <code>offset</code> は、サブセットに含まれる項目の最大数を設定します。


## Examples

### Example #1 
1 ～ 10 の数を含むリストの、オフセット 6 で始まるサブセットを求めます。
```powerquery
List.Range({1..10}, 6)
```

Result: 
```powerquery
{7, 8, 9, 10}
```


### Example #2 
1 ～ 10 の数を含むリストの、オフセット 6 で始まり長さが 2 のサブセットを求めます。
```powerquery
List.Range({1..10}, 6, 2)
```

Result: 
```powerquery
{7, 8}
```




## Category
List.Selection
