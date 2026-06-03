---
title: Text.Remove
---

# Text.Remove


Fjerner alle forekomster af det angivne tegn eller den angivne liste over tegn fra inputtekstværdien.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Returnerer en kopi af tekstværdien `text`, hvor alle tegn fra `removeChars` er fjernet.


## Examples

### Example #1
Fjern tegnene , og ; fra tekstværdien.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
