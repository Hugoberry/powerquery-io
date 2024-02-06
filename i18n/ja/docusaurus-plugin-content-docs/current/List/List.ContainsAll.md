---
title: List.ContainsAll
---

# List.ContainsAll


リストに他のリストのすべての値が含まれているかどうかを示します。


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

リスト <code>list</code> に他のリスト <code>values</code> のすべての値が含まれているかどうかを示します。    値がリストに見つかった場合は true、それ以外の場合は false を返します。省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。


## Examples

### Example #1 
リスト \{1, 2, 3, 4, 5} に 3 と 4 が含まれているかどうかを調べます。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3, 4, 5} に 5 と 6 が含まれているかどうかを調べます。
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
