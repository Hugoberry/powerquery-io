---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Poistaa annetusta sijainnista alkavan määritetyn määrän merkkejä


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

Palauttaa tekstiarvon <code>text</code> kopion, josta on poistettu kaikki merkit sijainnista <code>offset</code>.    Valinnaista parametria <code>count</code> voidaan käyttää määrittämään poistettavien merkkien määrä. Kohteen <code>count</code> oletusarvo on 1. Sijaintiarvot alkavat arvosta 0.


## Examples

### Example #1 
Poista yksi merkki tekstiarvosta &#34;ABEFC&#34; sijainnissa 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Poista kaksi merkkiä tekstiarvosta &#34;ABEFC&#34; alkaen sijainnista 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
