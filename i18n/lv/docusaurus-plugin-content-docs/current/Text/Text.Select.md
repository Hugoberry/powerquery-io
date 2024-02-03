---
title: Text.Select
---

# Text.Select


## Description

Ievades teksta vērtībā tiek atlasīti visi norādītās rakstzīmes vai rakstzīmju saraksta gadījumi.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Tiek atgriezta teksta vērtības “<code>text</code>” kopija, kurā noņemtas visas rakstzīmes, kas nav ietvertas <code>selectChars</code>.  


## Examples

### Example #1 
Atlasīt teksta vērtībā visas rakstzīmes diapazonā no “a” līdz “z”.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
