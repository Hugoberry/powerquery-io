---
title: Text.Select
---

# Text.Select


Selectează toate aparițiile caracterului dat sau ale listei de caractere din valoarea text de intrare.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

Returnează o copie a valorii text `text` cu toate caracterele care nu se află în `selectChars` eliminate.


## Examples

### Example #1
Selectați toate caracterele din zona de „a” la „z” din valoarea text.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
