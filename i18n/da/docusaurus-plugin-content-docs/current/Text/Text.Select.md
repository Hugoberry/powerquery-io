---
title: Text.Select
---

# Text.Select


## Description

Markerer alle forekomster af det angivne tegn eller den angivne tegnliste fra inputtekstværdien.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Returnerer en kopi af tekstværdien <code>text</code>, hvor alle tegn, som ikke er indeholdt i <code>selectChars</code>, er fjernet.  


## Examples

### Example #1 
Vælg alle tegn i området fra &#39;a&#39; til &#39;å&#39; fra tekstværdien.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
