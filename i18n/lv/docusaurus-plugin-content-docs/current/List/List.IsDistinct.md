---
title: List.IsDistinct
---

# List.IsDistinct


## Description

Tiek norādīts, vai sarakstā ir ietverti vērtību dublikāti.


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

Tiek noteikts, vai sarakstā <code>list</code> ir ietverti vērtību dublikāti, un tiek atgriezta attiecīgā loģiskā vērtība: <code>true</code>, ja visas saraksta vērtības ir unikālas, vai <code>false</code>, ja sarakstā ir vērtību dublikāti. 


## Examples

### Example #1 
Uzziniet, vai visas saraksta \{1, 2, 3} vērtības ir unikālas (t.i., nav vērtību dublikātu).
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
Uzziniet, vai visas saraksta \{1, 2, 3, 3} vērtības ir unikālas (t.i., nav vērtību dublikātu).
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
