---
title: Text.Insert
---

# Text.Insert


## Description

Lisää yhden tekstiarvon toiseen annetussa sijainnissa.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Palauttaa tekstiarvon <code>newText</code> tekstiarvoon <code>text</code> sijainnissa <code>offset</code> lisäämisen tuloksen. Sijainnit alkavat luvusta 0.


## Examples

### Example #1 
Lisää merkki &#34;C&#34; merkkien &#34;B&#34; ja &#34;D&#34; väliin merkkijonossa &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
