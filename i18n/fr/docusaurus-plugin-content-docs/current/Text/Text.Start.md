---
title: Text.Start
---

# Text.Start


## Description

Retourne le début du texte.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Retourne le premier caractère <code>count</code> de <code>text</code> comme valeur de texte.


## Examples

### Example #1 
Obtient les 5 premiers caractères du texte, &#34; Hello, World &#34;.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
