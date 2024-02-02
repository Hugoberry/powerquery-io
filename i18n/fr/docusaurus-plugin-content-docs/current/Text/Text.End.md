---
title: Text.End
---

# Text.End


## Description

Retourne les derniers caractères du texte.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Retourne une valeur <code>text</code> qui correspond aux derniers <code>count</code> caractères de la valeur <code>text</code> <code>text</code>.


## Examples

### Example #1 
Obtient les 5 derniers caractères du texte, &#34; Hello, World &#34;.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
