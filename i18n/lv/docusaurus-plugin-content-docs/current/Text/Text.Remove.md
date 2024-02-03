---
title: Text.Remove
---

# Text.Remove


## Description

No ievades teksta vērtības tiek noņemti visi norādītās rakstzīmes vai rakstzīmju saraksta gadījumi.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Tiek atgriezta teksta vērtības <code>text</code> kopija, kurā noņemtas visas rakstzīmes no <code>removeChars</code>.  


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
