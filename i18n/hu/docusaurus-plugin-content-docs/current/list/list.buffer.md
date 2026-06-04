---
title: List.Buffer
---

# List.Buffer


Pufferel egy listát.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Remarks

A memóriában puffereli a(z) `list` listát. A hívás eredménye egy stabil lista.


## Examples

### Example #1
Létrehozza az \{1..10\} lista stabil másolatát.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
