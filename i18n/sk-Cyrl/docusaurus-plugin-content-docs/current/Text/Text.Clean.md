---
title: Text.Clean
---

# Text.Clean


## Description

Vráti textovú hodnotu, pričom odstráni všetky riadiace znaky.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Vráti textovú hodnotu, pričom odstráni všetky riadiace znaky <code>text</code>.


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
