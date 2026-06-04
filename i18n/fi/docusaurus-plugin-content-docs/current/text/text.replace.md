---
title: Text.Replace
---

# Text.Replace


Korvaa annetun alimerkkijonon kaikki esiintymät tekstissä.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Remarks

Palauttaa tuloksen, joka on tekstiarvon `old` kaikkien esiintymien korvaamisesta tekstiarvolla `new` tekstiarvossa `text`. Tässä funktiossa kirjainkoko on merkitsevä.


## Examples

### Example #1
Korvaa jokainen virkkeen tekstin "the" esiintymä tekstillä "a".
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
