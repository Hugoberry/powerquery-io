---
title: Text.Replace
---

# Text.Replace


Nahradí všetky výskyty daného podreťazca v texte.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Vráti výsledok nahradenia všetkých výskytov textovej hodnoty `old` v textovej hodnote `text` textovou hodnotou `new`. Táto funkcia rozlišuje malé a veľké písmená.


## Examples

### Example #1
Nahraďte každý výskyt textu "the" vo vete textom "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
