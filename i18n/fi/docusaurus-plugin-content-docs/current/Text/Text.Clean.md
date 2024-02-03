---
title: Text.Clean
---

# Text.Clean


## Description

Palauttaa tekstiarvon, jonka kaikki ohjausmerkit on poistettu.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Details

Palauttaa tekstiarvon, jonka kaikki ohjausmerkit (kohde: <code>text</code>) on poistettu.


## Examples

### Example #1 
Poista rivinvaihdot ja muut ohjausmerkit tekstiarvosta.
```powerquery
Text.Clean("ABC#(lf)D")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
