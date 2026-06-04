---
title: Text.Clean
---

# Text.Clean


Vrátí textovou hodnotu s odebranými řídicími znaky.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Vrátí textovou hodnotu s odebranými řídicími znaky (`text`).


## Examples

### Example #1
Odebere z textové hodnoty odřádkování a další řídicí znaky.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
