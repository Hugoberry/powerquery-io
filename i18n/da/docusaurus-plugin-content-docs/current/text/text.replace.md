---
title: Text.Replace
---

# Text.Replace


Erstatter alle forekomster af den angivne understreng i teksten.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Returnerer resultatet af at erstatte alle forekomster af tekstværdien `old` i tekstværdien `text` med værdien `new`. Denne funktion skelner mellem store og små bogstaver.


## Examples

### Example #1
Erstat alle forekomster af "the" i en sætning med "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
