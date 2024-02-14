---
title: List.Last
---

# List.Last


リスト内の最後の値を返します。リストが空の場合、指定された既定値を返します。


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

リスト <code>list</code> 内の最後の項目を返します。リストが空の場合、省略可能な既定値 <code>defaultValue</code> を返します。    リストが空で、かつ既定値が指定されていない場合、この関数は <code>null</code> を返します。


## Examples

### Example #1 
リスト \{1, 2, 3} 内の最後の値を求めます。
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
リスト \{} 内の最後の値を求めます。リストが空の場合、-1 を返します。
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
