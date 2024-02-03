---
title: Text.Replace
---

# Text.Replace


## Description

Korvaa annetun alimerkkijonon kaikki esiintymät tekstissä.


## Syntax

```powerquery
Text.Replace(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Palauttaa tuloksen, joka on tekstiarvon <code>old</code> kaikkien esiintymien korvaamisesta tekstiarvolla <code>new</code> tekstiarvossa <code>text</code>. Tässä funktiossa kirjainkoko on merkitsevä.


## Examples

### Example #1 
Korvaa jokainen virkkeen tekstin &#34;the&#34; esiintymä tekstillä &#34;a&#34;.
```powerquery
Text.Replace("the quick brown fox jumps over the lazy dog", "the", "a")
```

Result: 
```powerquery
"a quick brown fox jumps over a lazy dog"
```




## Category
Text.Modification
