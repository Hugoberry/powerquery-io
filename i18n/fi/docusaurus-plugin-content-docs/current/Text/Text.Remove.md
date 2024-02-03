---
title: Text.Remove
---

# Text.Remove


## Description

Poistaa annetun merkin tai merkkiluettelon kaikki esiintymät syötetekstiarvosta.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Details

Palauttaa tekstiarvon <code>text</code> kopion, josta on poistettu kaikki merkit kohteesta <code>removeChars</code>.  


## Examples

### Example #1 
Poista merkit , ja ; tekstiarvosta.
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
