---
title: Number.Combinations
---

# Number.Combinations


## Description

Palauttaa yksilöivien yhdistelmien määrän.


## Syntax

```powerquery
Number.Combinations(
    setSize as number,
    combinationSize as number
) as number
```


## Details

Palauttaa yksilöivien yhdistelmien määrän kohdeluettelosta <code>setSize</code> käyttäen määritettyä yhdistelmän kokoa <code>combinationSize</code>.<ul>    <li><code>setSize</code>: luettelon kohteiden määrä.</li>    <li><code>combinationSize</code>: kunkin yhdistelmän kohteiden määrä.</li></ul>


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
