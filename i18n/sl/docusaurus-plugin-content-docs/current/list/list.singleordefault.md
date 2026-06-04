---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Vrne seznam z enim elementom za seznam z eno dolžino in privzeto vrednost za prazen seznam.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Če je na seznamu `list` le en element, vrne ta element. Če je seznam prazen, funkcija vrne"null", razen če določite izbirni parameter `default`. Če je na seznamu več kot en element, funkcija vrne napako.


## Examples

### Example #1
Poiščite eno vrednost na seznamu \{1\}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2
Poiščite eno vrednost na seznamu \{\}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3
Poiščite eno vrednost na seznamu \{\}. Če je seznam prazen, vrnite –1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
