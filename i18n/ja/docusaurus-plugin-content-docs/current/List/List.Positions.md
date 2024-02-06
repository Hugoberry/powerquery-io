---
title: List.Positions
---

# List.Positions


入力のオフセットのリストを返します。


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

入力リスト <code>list</code> のオフセットのリストを返します。    List.Transform を使用してリストを変更するとき、位置のリストを使用して、位置への変換アクセスを指定できます。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, null, 5} 内の値のオフセットを求めます。
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
