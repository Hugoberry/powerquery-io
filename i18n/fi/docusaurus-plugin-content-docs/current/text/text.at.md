---
title: Text.At
---

# Text.At


Palauttaa määritetyssä sijainnissa olevan merkin.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

Palauttaa sijainnissa `index` olevan tekstiarvon `text` merkin. Tekstin ensimmäinen merkki on sijainnissa 0.


## Examples

### Example #1
Etsi merkkijonon "Hello, World" sijainnissa 4 oleva merkki.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
