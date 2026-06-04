---
title: List.Difference
---

# List.Difference


Vrátí rozdíl mezi dvěma danými seznamy.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vrátí položky seznamu `list1`, které nejsou v seznamu `list2`. Duplicitní hodnoty jsou podporovány. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice `equationCriteria`.


## Examples

### Example #1
Zjistí položky seznamu \{1, 2, 3, 4, 5\}, které nejsou v seznamu \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Zjistí položky seznamu \{1, 2\}, které nejsou v seznamu \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
