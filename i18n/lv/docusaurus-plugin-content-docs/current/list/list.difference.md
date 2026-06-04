---
title: List.Difference
---

# List.Difference


Tiek atgriezta divu norādīto sarakstu starpība.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Atgriež saraksta `list1` vienumus, kas nav ietverti sarakstā `list2`. Tiek atbalstīti vērtību dublikāti. Varat norādīt papildu vienādojuma kritēriju vērtību `equationCriteria`, lai kontrolētu vienādības pārbaudi.


## Examples

### Example #1
Atrodiet vienumus, kas nav ietverti sarakstā \{4, 5, 3\}, sarakstā \{1, 2, 3, 4, 5\}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Iegūstiet saraksta \{1, 2\} vienumus, kas nav ietverti sarakstā \{1, 2, 3\}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
