---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Palauttaa funktion, joka yhdistää tekstiluettelon käyttäen määritettyjä sijainteja ja pituuksia.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Palauttaa funktion, joka yhdistää tekstiarvoluettelon yksittäiseksi tekstiarvoksi käyttäen määritettyjä tulossijainteja ja -pituuksia. Tyhjäarvopituus ilmaisee, että koko tekstiarvo tulee sisällyttää.


## Examples

### Example #1 
Yhdistä tekstiarvojen luettelo käyttäen määritettyjä tulossijainteja ja -pituuksia.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
