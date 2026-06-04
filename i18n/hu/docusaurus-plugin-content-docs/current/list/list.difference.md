---
title: List.Difference
---

# List.Difference


A két megadott lista különbségét adja vissza.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

A(z) `list1` lista azon elemeit adja vissza, amelyek nem szerepelnek a(z) `list2` listán. Ismétlődő értékek is engedélyezettek. Megadható egy nem kötelező `equationCriteria` egyenlőségi feltétel érték is az egyenlőségvizsgálat szabályozásához.


## Examples

### Example #1
Az \{1, 2, 3, 4, 5\} lista azon elemeinek megkeresése, amelyek nem szerepelnek a \{4, 5, 3\} listán.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Az \{1, 2\} lista azon elemeinek megkeresése, amelyek nem szerepelnek az \{1, 2, 3\} listán.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
