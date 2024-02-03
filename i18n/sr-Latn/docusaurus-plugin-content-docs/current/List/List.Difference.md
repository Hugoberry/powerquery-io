---
title: List.Difference
---

# List.Difference


## Description

Vraća razliku između dve date liste.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Vraća stavke sa liste <code>list1</code> koje se ne pojavljuju na listi <code>list2</code>. Duplirane vrednosti su podržane.    Može se navesti opcionalna vrednost kriterijuma jednakosti, <code>equationCriteria</code>, radi kontrole testiranja jednakosti. 


## Examples

### Example #1 
Pronalaženje stavki sa liste \{1, 2, 3, 4, 5} koje se ne pojavljuju na listi \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Pronalaženje stavki sa liste \{1, 2} koje se ne pojavljuju na listi \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
