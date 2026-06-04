---
title: Text.Clean
---

# Text.Clean


Palauttaa tekstiarvon, jonka kaikki ohjausmerkit on poistettu.


## Syntax

```powerquery
Text.Clean(
    text as text
) as text
```


## Remarks

Palauttaa tekstiarvon, jonka kaikki ohjausmerkit (kohde: `text`) on poistettu.


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
