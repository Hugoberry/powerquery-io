---
title: List.Difference
---

# List.Difference


Zwraca różnicę między dwiema danymi listami.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Zwraca elementy z listy <code>list1</code>, które nie występują na liście <code>list2</code>. Obsługiwane są zduplikowane wartości.    W celu sterowania sprawdzaniem równości można określić opcjonalną wartość kryterium równości <code>equationCriteria</code>. 


## Examples

### Example #1 
Znajdź elementy z listy \{1, 2, 3, 4, 5}, które nie występują na liście \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Znajdź elementy z listy \{1, 2}, które nie występują na liście \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
