---
title: Lines.ToBinary
---

# Lines.ToBinary


Convertit une liste de texte dans une valeur binaire à l'aide de l'encodage spécifié et d'un lineSeparator. Le lineSeparator spécifié est ajouté à chaque ligne. S'il n'est pas spécifié, alors des caractères de retour chariot et de saut de ligne sont utilisés.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

Convertit une liste de texte dans une valeur binaire à l'aide de l'encodage spécifié et d'un lineSeparator. Le lineSeparator spécifié est ajouté à chaque ligne. S'il n'est pas spécifié, alors des caractères de retour chariot et de saut de ligne sont utilisés.



## Category
Lines
