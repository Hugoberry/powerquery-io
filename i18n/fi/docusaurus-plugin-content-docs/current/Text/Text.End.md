---
title: Text.End
---

# Text.End


## Description

Palauttaa tekstin viimeiset merkit.


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Details

Palauttaa <code>text</code>-arvon, joka on <code>text</code>-arvon <code>text</code> viimeiset <code>count</code> merkkiä.


## Examples

### Example #1 
Hae tekstin &#34;Hello, World&#34; viimeiset viisi merkkiä.
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
