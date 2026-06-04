---
title: List.IsDistinct
---

# List.IsDistinct


Tiek norādīts, vai sarakstā ir ietverti vērtību dublikāti.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Tiek noteikts, vai sarakstā `list` ir ietverti vērtību dublikāti, un tiek atgriezta attiecīgā loģiskā vērtība: `true`, ja visas saraksta vērtības ir unikālas, vai `false`, ja sarakstā ir vērtību dublikāti.


## Examples

### Example #1
Uzziniet, vai visas saraksta \{1, 2, 3\} vērtības ir unikālas (t.i., nav vērtību dublikātu).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2
Uzziniet, vai visas saraksta \{1, 2, 3, 3\} vērtības ir unikālas (t.i., nav vērtību dublikātu).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
