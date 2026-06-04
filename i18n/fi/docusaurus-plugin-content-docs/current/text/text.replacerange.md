---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Poistaa tekstialueen ja lisää uuden arvon määritettyyn sijaintiin.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

Palauttaa tuloksen, joka seuraa `count` merkin poistamisesta tekstiarvosta `text` alkaen sijainnista `offset` ja tekstiarvon `newText` lisäämisen samaan sijaintiin kohteessa `text`.


## Examples

### Example #1
Korvaa yksittäinen merkki sijainnissa 2 tekstiarvossa "ABGF" uudella tekstiarvolla "CDE".
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
