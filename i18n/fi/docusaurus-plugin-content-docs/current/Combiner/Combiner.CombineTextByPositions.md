---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Palauttaa funktion, joka yhdistää tekstiluettelon käyttäen määritettyjä tulossijainteja.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Palauttaa funktion, joka yhdistää tekstiarvoluettelon yksittäiseksi tekstiarvoksi käyttäen määritettyjä tulossijainteja.


## Examples

### Example #1 
Yhdistä tekstiarvojen luettelo sijoittamalla ne tulokseen määritetyissä sijainneissa.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
