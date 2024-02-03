---
title: List.Durations
---

# List.Durations


## Description

Muodostaa luettelon duration-arvoista, kun annetaan alkuarvo, määrä ja lisäävä keston arvo.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Palauttaa luettelon (<code>count</code>) <code>duration</code>-arvoista alkaen arvosta <code>start</code> ja lisättynä annetulla <code>duration</code>-arvolla <code>step</code>.


## Examples

### Example #1 
Luo 5 arvon luettelo alkaen yhdestä tunnista ja lisäten 1 tunnilla.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
