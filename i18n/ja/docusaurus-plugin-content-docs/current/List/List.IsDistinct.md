---
title: List.IsDistinct
---

# List.IsDistinct


## Description

リストに重複があるかどうかを示します。


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

リスト <code>list</code> に重複があるかどうかを示す論理値を返します。リストが一意の場合は <code>true</code>、重複する値がある場合は <code>false</code> を返します。


## Examples

### Example #1 
リスト \{1, 2, 3} が一意 (重複がない) かどうかを調べます。
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3, 3} が一意 (重複がない) かどうかを調べます。
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
