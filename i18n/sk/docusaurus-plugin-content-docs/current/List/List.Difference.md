---
title: List.Difference
---

# List.Difference


## Description

Vráti rozdiel dvoch daných zoznamov.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Vráti položky v zozname <code>list1</code>, ktoré sa nevyskytujú v zozname <code>list2</code>. Duplicitné hodnoty sa podporujú.    Možno zadať voliteľnú hodnotu kritérií rovnosti <code>equationCriteria</code> na kontrolu testovania rovnosti. 


## Examples

### Example #1 
Nájdite položky v zozname \{1, 2, 3, 4, 5}, ktoré sa nevyskytujú v zozname \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Nájdite položky v zozname \{1, 2}, ktoré sa nevyskytujú v zozname \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
