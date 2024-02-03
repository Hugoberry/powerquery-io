---
title: Text.Remove
---

# Text.Remove


## Description

Odstráni všetky výskyty daného znaku alebo zoznamu znakov zo vstupnej textovej hodnoty.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Vráti kópiu textovej hodnoty <code>text</code>, pričom odstráni všetky znaky z pozície <code>removeChars</code>.  


## Examples

### Example #1 
Odstráňte znaky , a ; z textovej hodnoty.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
