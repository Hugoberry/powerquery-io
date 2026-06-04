---
title: List.Single
---

# List.Single


Vrne seznam z enim elementom za seznam z eno dolžino, sicer pride do napake.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Če je na seznamu `list` na voljo le en element, je vrnjen ta element. Če je na seznamu na voljo več kot en element ali pa je seznam prazen, funkcija vrne napako.


## Examples

### Example #1
Poiščite eno vrednost na seznamu \{1\}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Poiščite eno vrednost na seznamu \{1, 2, 3\}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
