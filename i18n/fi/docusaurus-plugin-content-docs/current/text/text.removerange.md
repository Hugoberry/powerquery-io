---
title: Text.RemoveRange
---

# Text.RemoveRange


Poistaa annetusta sijainnista alkavan määritetyn määrän merkkejä


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

Palauttaa tekstiarvon `text` kopion, josta on poistettu kaikki merkit sijainnista `offset`. Valinnaista parametria `count` voidaan käyttää määrittämään poistettavien merkkien määrä. Kohteen `count` oletusarvo on 1. Sijaintiarvot alkavat arvosta 0.


## Examples

### Example #1
Poista yksi merkki tekstiarvosta "ABEFC" sijainnissa 2.
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2
Poista kaksi merkkiä tekstiarvosta "ABEFC" alkaen sijainnista 2.
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
