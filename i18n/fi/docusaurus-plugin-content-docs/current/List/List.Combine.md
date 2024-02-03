---
title: List.Combine
---

# List.Combine


## Description

Palauttaa yksittäisen luettelon yhdistämällä useita luetteloita.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Ottaa luetteloiden luettelon <code>lists</code> ja yhdistää luettelot yksittäiseksi uudeksi luetteloksi.


## Examples

### Example #1 
Yhdistä kaksi yksinkertaista luetteloa \{1, 2} ja \{3, 4}.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
Yhdistä kaksi luetteloa \{1, 2} ja \{3, \{4, 5}}, joista toinen sisältää sisäkkäisen luettelon.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
