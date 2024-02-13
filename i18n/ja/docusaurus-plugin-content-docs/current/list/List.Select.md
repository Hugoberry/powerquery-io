---
title: List.Select
---

# List.Select


条件に一致する値のリストを返します。


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Remarks

リスト <code>list</code> から、選択条件 <code>selection</code> に一致する値のリストを返します。


## Examples

### Example #1 
リスト \{1, -3, 4, 9, -2} 内の 0 を超える値を求めます。
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
