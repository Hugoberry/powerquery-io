---
title: Number.Combinations
---

# Number.Combinations


Palauttaa yksilöivien yhdistelmien määrän.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Remarks

Palauttaa yksilöivien yhdistelmien määrän kohdeluettelosta `setSize` käyttäen määritettyä yhdistelmän kokoa `combinationSize`.

-   `setSize`: luettelon kohteiden määrä.
-   `combinationSize`: kunkin yhdistelmän kohteiden määrä.


## Examples

### Example #1
Selvitä yhdistelmien määrä yhteensä viidestä kohteesta, kun kukin yhdistelmä on kolmen ryhmä.
```powerquery
Number.Combinations(5, 3)
```

Result: 
```powerquery
10
```




## Category
Number.Operations
