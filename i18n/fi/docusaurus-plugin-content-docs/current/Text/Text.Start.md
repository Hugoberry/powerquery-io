---
title: Text.Start
---

# Text.Start


## Description

Palauttaa tekstin alun.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Details

Palauttaa kohteen <code>text</code> ensimmäiset <code>count</code> merkkiä tekstiarvona.


## Examples

### Example #1 
Hae tekstin &#34;Hello, World&#34; ensimmäiset viisi merkkiä.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
