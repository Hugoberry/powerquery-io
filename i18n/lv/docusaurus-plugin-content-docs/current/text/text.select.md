---
title: Text.Select
---

# Text.Select


Ievades teksta vērtībā tiek atlasīti visi norādītās rakstzīmes vai rakstzīmju saraksta gadījumi.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Tiek atgriezta teksta vērtības “`text`” kopija, kurā noņemtas visas rakstzīmes, kas nav ietvertas `selectChars`.


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
