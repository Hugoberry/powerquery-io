---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

Palauttaa funktion, joka yhdistää tekstiluettelon käyttäen määritettyjä pituuksia.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

Palauttaa funktion, joka yhdistää tekstiarvoluettelon yksittäiseksi tekstiarvoksi käyttäen määritettyjä pituuksia.


## Examples

### Example #1 
Yhdistä tekstiarvojen luettelo poimimalla määritetyt merkkien luvut kustakin syötearvosta.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
Yhdistä tekstiarvojen luettelo poimimalla määritetyt merkkien luvut sen jälkeen, kun olet ensin täyttänyt tuloksen mallitekstillä.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
