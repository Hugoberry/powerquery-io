---
title: List.IsDistinct
---

# List.IsDistinct


Wskazuje, czy na liście znajdują się duplikaty.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Zwraca wartość logiczną wskazującą, czy na liście <code>list</code> znajdują się duplikaty; jeśli na liście nie ma duplikatów, jest zwracana wartość <code>true</code>, a jeśli na liście znajdują się duplikaty, wartość <code>false</code>. 


## Examples

### Example #1 
Sprawdź, czy lista \{1, 2, 3} zawiera unikatowe wartości (nie zawiera duplikatów).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Sprawdź, czy lista \{1, 2, 3, 3} zawiera unikatowe wartości (nie zawiera duplikatów).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
