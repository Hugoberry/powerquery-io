---
title: List.Single
---

# List.Single


Vráti jednu položku zoznamu pre zoznam s dĺžkou jeden, v opačnom prípade vyvolá chybu.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Ak sa v zozname `list` nachádza iba jedna položka, vráti túto položku. Ak existuje viac ako jedna položka alebo je zoznam prázdny, funkcia vyvolá chybu.


## Examples

### Example #1
Nájdite jednu hodnotu v zozname \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Nájdite jednu hodnotu v zozname \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
