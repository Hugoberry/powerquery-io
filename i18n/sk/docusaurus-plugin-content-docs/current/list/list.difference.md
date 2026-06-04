---
title: List.Difference
---

# List.Difference


Vráti rozdiel dvoch daných zoznamov.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vráti položky v zozname `list1`, ktoré sa nevyskytujú v zozname `list2`. Duplicitné hodnoty sa podporujú. Možno zadať voliteľnú hodnotu kritérií rovnosti `equationCriteria` na kontrolu testovania rovnosti.


## Examples

### Example #1
Nájdite položky v zozname \{1, 2, 3, 4, 5\}, ktoré sa nevyskytujú v zozname \{4, 5, 3\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Nájdite položky v zozname \{1, 2\}, ktoré sa nevyskytujú v zozname \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
