---
title: Text.Remove
---

# Text.Remove


## Description

Elimină toate ocurenţele caracterului dat sau ale listei de caractere din valoarea text a datelor introduse.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Returnează o copie a valorii text <code>text</code> cu toate caracterele din <code>removeChars</code> eliminate.  


## Examples

### Example #1 
Eliminaţi caracterele , şi ; din valoarea text.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
