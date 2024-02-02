---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Retourne une fonction qui divise le texte en liste de textes selon une transition d&#39;un type de caractère à un autre. Les paramètres \{0} et \{1} peuvent être une liste de caractères ou une fonction qui prend un caractère et qui retourne true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Retourne une fonction qui divise le texte en liste de textes selon une transition d'un type de caractère à un autre. Les paramètres <code>before</code> et <code>after</code> peuvent être une liste de caractères ou une fonction qui prend un caractère et qui retourne true/false.


## Examples

### Example #1 
Divise l&#39;entrée chaque fois qu&#39;une lettre majuscule ou minuscule est suivie d&#39;un chiffre.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
