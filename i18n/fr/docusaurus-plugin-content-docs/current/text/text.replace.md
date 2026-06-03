---
title: Text.Replace
---

# Text.Replace


Remplace toutes les occurrences de la sous-chaîne spécifiée dans le texte.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Retourne le résultat du remplacement de toutes les occurrences de la valeur de texte `old`, dans la valeur de texte `text`, par la valeur de texte `new`. Cette fonction respecte la casse.


## Examples

### Example #1
Remplace toutes les occurrences de "the" dans une phrase par "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
