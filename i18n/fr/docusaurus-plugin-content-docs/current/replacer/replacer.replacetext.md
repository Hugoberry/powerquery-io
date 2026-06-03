---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


Remplace le texte dans l'entrée fournie.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Remplace le texte `old` dans le `text` d'origine par le texte `new`. Cette fonction de remplacement peut être utilisée dans `List.ReplaceValue` et `Table.ReplaceValue`.


## Examples

### Example #1
Remplace le texte "hE" par "He" dans la chaîne "hEllo world".
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
