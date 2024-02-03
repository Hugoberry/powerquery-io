---
title: List.Contains
---

# List.Contains


## Description

リストに値が含まれているかどうかを示します。


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

リスト <code>list</code> に値 <code>value</code> が含まれているかどうかを示します。    値がリストに見つかった場合は true、それ以外の場合は false を返します。省略可能な数式条件値 <code>equationCriteria</code> を指定して、値が等しいかどうかのテストを制御できます。 


## Examples

### Example #1 
リスト \{1, 2, 3, 4, 5} に 3 が含まれているかどうかを調べます。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
リスト \{1, 2, 3, 4, 5} に 6 が含まれているかどうかを調べます。
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
