---
title: Text.Remove
---

# Text.Remove


Elimină toate ocurenţele caracterului dat sau ale listei de caractere din valoarea text a datelor introduse.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Returnează o copie a valorii text `text` cu toate caracterele din `removeChars` eliminate.


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
