---
title: List.Difference
---

# List.Difference


Vraća razliku između dve date liste.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vraća stavke sa liste `list1` koje se ne pojavljuju na listi `list2`. Duplirane vrednosti su podržane. Može se navesti opcionalna vrednost kriterijuma jednakosti, `equationCriteria`, radi kontrole testiranja jednakosti.


## Examples

### Example #1
Pronalaženje stavki sa liste \{1, 2, 3, 4, 5\} koje se ne pojavljuju na listi \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Pronalaženje stavki sa liste \{1, 2\} koje se ne pojavljuju na listi \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
