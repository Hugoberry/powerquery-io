---
title: Text.At
---

# Text.At


Retourne le caractère à la position spécifiée.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Retourne le caractère dans la valeur de texte, <code>text</code> à la position <code>index</code>. Le premier caractère dans le texte est à la position 0.


## Examples

### Example #1 
Recherche le caractère à la position 4 dans la chaîne &#34; Hello, World &#34;.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
