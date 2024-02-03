---
title: List.ContainsAny
---

# List.ContainsAny


## Description

リストに他のリストのいずれかの値が含まれているかどうかを示します。


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

リスト <code>list</code> に他のリスト <code>values</code> のいずれかの値が含まれているかどうかを示します。        値がリストに見つかった場合は true、それ以外の場合は false を返します。省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, 5} に 3 または 9 が含まれているかどうかを調べます。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3, 4, 5} に 6 または 7 が含まれているかどうかを調べます。
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
