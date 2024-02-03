---
title: List.Zip
---

# List.Zip


## Description

Palauttaa luettelon luetteloista yhdistämällä useissa luetteloissa samassa sijainnissa olevat kohteet.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Ottaa luettelon luetteloista, <code>lists</code>, ja palauttaa luettelon luetteloista yhdistämällä samassa sijainnissa olevat kohteet.


## Examples

### Example #1 
Zippaa kaksi yksinkertaista luetteloa: \{1, 2} ja \{3, 4}.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
Zippaa kaksi yksinkertaista eri pituista luetteloa: \{1, 2} ja \{3}.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
