---
title: Text.Remove
---

# Text.Remove


Poistaa annetun merkin tai merkkiluettelon kaikki esiintymät syötetekstiarvosta.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

Palauttaa tekstiarvon `text` kopion, josta on poistettu kaikki merkit kohteesta `removeChars`.


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
