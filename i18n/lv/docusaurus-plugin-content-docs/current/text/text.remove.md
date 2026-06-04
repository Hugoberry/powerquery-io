---
title: Text.Remove
---

# Text.Remove


No ievades teksta vērtības tiek noņemti visi norādītās rakstzīmes vai rakstzīmju saraksta gadījumi.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Tiek atgriezta teksta vērtības `text` kopija, kurā noņemtas visas rakstzīmes no `removeChars`.


## Examples

### Example #1
Noņemiet rakstzīmes , un ; no teksta vērtības.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
