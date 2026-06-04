---
title: Text.Insert
---

# Text.Insert


Lisää yhden tekstiarvon toiseen annetussa sijainnissa.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

Palauttaa tekstiarvon `newText` tekstiarvoon `text` sijainnissa `offset` lisäämisen tuloksen. Sijainnit alkavat luvusta 0.


## Examples

### Example #1
Lisää merkki "C" merkkien "B" ja "D" väliin merkkijonossa "ABD".
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
