---
title: List.Single
---

# List.Single


## Description

Visszaadja egy 1 hosszúságú lista egyetlen elemét, egyéb esetben pedig kivételt vált ki.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Ha csak egy elem szerepel a(z) <code>list</code> listán, a függvény azt az elemet adja vissza.    Ha több elem szerepel a listán, vagy ha a lista üres, a függvény kivételt vált ki.


## Examples

### Example #1 
A(z) \{1} lista egyetlen értékének megkeresése
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Az \{1, 2, 3} lista egyetlen értékének megkeresése
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
