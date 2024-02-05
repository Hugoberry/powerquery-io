---
title: Text.Select
---

# Text.Select


## Description

Markerar alla förekomster av det givna tecknet eller listan med tecken från indatatextvärdet.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Returnerar en kopia av textvärdet <code>text</code> där alla tecken som inte finns i <code>selectChars</code> har tagits bort.  


## Examples

### Example #1 
Markera alla tecken mellan a till z från textvärdet.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
