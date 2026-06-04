---
title: Text.Remove
---

# Text.Remove


Odstráni všetky výskyty daného znaku alebo zoznamu znakov zo vstupnej textovej hodnoty.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Vráti kópiu textovej hodnoty `text`, pričom odstráni všetky znaky z pozície `removeChars`.


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
