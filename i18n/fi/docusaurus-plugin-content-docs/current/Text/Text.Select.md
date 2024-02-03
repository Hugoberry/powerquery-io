---
title: Text.Select
---

# Text.Select


## Description

Valitsee annetun merkin tai merkkiluettelon kaikki esiintymät syötetekstiarvosta.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

Palauttaa tekstiarvon <code>text</code> kopion, josta on poistettu kaikki merkit, joita ei ole kohteessa <code>selectChars</code>.  


## Examples

### Example #1 
Valitse tekstiarvosta kaikki merkit välillä a–z.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
