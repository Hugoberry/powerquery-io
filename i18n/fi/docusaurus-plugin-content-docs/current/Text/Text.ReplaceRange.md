---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Palauttaa tuloksen, joka seuraa <code>count</code> merkin poistamisesta tekstiarvosta <code>text</code> alkaen sijainnista <code>offset</code> ja tekstiarvon <code>newText</code> lisäämisen samaan sijaintiin kohteessa <code>text</code>.


## Examples

### Example #1 
Korvaa yksittäinen merkki sijainnissa 2 tekstiarvossa &#34;ABGF&#34; uudella tekstiarvolla &#34;CDE&#34;.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
