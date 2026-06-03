---
title: Text.Select
---

# Text.Select


Markerer alle forekomster af det angivne tegn eller den angivne tegnliste fra inputtekstværdien.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Returnerer en kopi af tekstværdien `text`, hvor alle tegn, som ikke er indeholdt i `selectChars`, er fjernet.


## Examples

### Example #1
Vælg alle tegn i området fra 'a' til 'å' fra tekstværdien.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
