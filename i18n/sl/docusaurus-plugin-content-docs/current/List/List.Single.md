---
title: List.Single
---

# List.Single


## Description

Vrne seznam z enim elementom za seznam z eno dolžino, sicer pride do izjeme.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Če je na seznamu <code>list</code> le en element, vrne ta element.    Če je na seznamu več kot en element ali je seznam prazen, funkcija vrne izjemo.


## Examples

### Example #1 
Poiščite eno vrednost na seznamu \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Poiščite eno vrednost na seznamu \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
