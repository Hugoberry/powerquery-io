---
title: Text.Clean
---

# Text.Clean


Vráti textovú hodnotu, pričom odstráni všetky riadiace znaky.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Vráti textovú hodnotu, pričom odstráni všetky riadiace znaky `text`.


## Examples

### Example #1
Odstráňte znaky posunu riadka a ostatné vodiace znaky z textovej hodnoty.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
