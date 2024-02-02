---
title: Text.Replace
---

# Text.Replace


## Description

Remplace toutes les occurrences de la sous-chaîne spécifiée dans le texte.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Retourne le résultat du remplacement de toutes les occurrences de la valeur de texte <code>old</code>, dans la valeur de texte <code>text</code>, par la valeur de texte <code>new</code>. Cette fonction respecte la casse.


## Examples

### Example #1 
Remplace toutes les occurrences de &#34; the &#34; dans une phrase par &#34; a &#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
