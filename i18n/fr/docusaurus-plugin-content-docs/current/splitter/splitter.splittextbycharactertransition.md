---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


Retourne une fonction qui divise le texte en liste de textes selon une transition d'un type de caractère à un autre. Les paramètres \{0\} et \{1\} peuvent être une liste de caractères ou une fonction qui prend un caractère et qui retourne true/false.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Remarks

Retourne une fonction qui divise le texte en liste de textes selon une transition d'un type de caractère à un autre. Les paramètres `before` et `after` peuvent être une liste de caractères ou une fonction qui prend un caractère et qui retourne true/false.


## Examples

### Example #1
Divise l'entrée chaque fois qu'une lettre majuscule ou minuscule est suivie d'un chiffre.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
