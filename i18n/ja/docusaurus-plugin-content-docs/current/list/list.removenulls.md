---
title: List.RemoveNulls
---

# List.RemoveNulls


指定されたリストからすべての &#34;null&#34; 値を削除します。


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

<code>list</code> 内の "null" 値のすべての出現を削除します。リストに "null" 値が存在しない場合、元のリストが返されます。


## Examples

### Example #1 
リスト \{1, 2, 3, null, 4, 5, null, 6} から &#34;null&#34; 値を削除します。
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
