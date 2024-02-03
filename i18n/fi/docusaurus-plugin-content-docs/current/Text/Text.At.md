---
title: Text.At
---

# Text.At


## Description

Palauttaa määritetyssä sijainnissa olevan merkin.


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

Palauttaa sijainnissa <code>index</code> olevan tekstiarvon <code>text</code> merkin. Tekstin ensimmäinen merkki on sijainnissa 0.


## Examples

### Example #1 
Etsi merkkijonon &#34;Hello, World&#34; sijainnissa 4 oleva merkki.
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
