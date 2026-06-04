---
title: List.Single
---

# List.Single


Visszaadja az egy elemű lista egyetlen elemét, egyéb esetben hibát jelez.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Ha csak egy elem szerepel a(z) `list` listán, a függvény azt az elemet adja vissza. Ha több elem van, vagy a lista üres, a függvény hibát jelez.


## Examples

### Example #1
A(z) \{1\} lista egyetlen értékének megkeresése
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Az \{1, 2, 3\} lista egyetlen értékének megkeresése
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
