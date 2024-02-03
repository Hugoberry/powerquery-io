---
title: List.Distinct
---

# List.Distinct


## Description

Palauttaa arvoluettelon, josta on poistettu kaksoiskappaleet.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Palauttaa luettelon, joka sisältää kaikki luettelon <code>list</code> arvot niin, että kaksoiskappaleet on poistettu. Jos luettelo on tyhjä, tulos on tyhjä luettelo.


## Examples

### Example #1 
Poista kaksoiskappaleet luettelosta \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
