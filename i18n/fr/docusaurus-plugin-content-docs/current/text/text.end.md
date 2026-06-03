---
title: Text.End
---

# Text.End


Retourne les derniers caractères du texte.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

Retourne une valeur `text` qui correspond aux derniers `count` caractères de la valeur `text` `text`.


## Examples

### Example #1
Obtient les 5 derniers caractères du texte, « Hello, World ».
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
