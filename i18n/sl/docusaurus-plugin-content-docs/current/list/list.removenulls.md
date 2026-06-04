---
title: List.RemoveNulls
---

# List.RemoveNulls


Odstrani vse vrednosti"null"iz navedenega seznama.


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

Odstrani vse pojavitve vrednosti"null"na seznamu `list`. Če na seznamu ni vrednosti"null", je vrnjen izvirni seznam.


## Examples

### Example #1
Odstranite vrednosti"null"iz seznama \{1, 2, 3, null, 4, 5, null, 6\}.
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
