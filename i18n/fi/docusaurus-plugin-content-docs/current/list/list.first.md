---
title: List.First
---

# List.First


Palauttaa luettelon ensimmäisen arvon tai määritetyn oletusarvon, jos se on tyhjä.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Palauttaa luettelon `list` ensimmäisen kohteen tai valinnaisen oletusarvon `defaultValue`, jos luettelo on tyhjä. Jos luettelo on tyhjä, eikä oletusarvoa ole määritetty, funktio palauttaa arvon `null`.


## Examples

### Example #1
Selvitä luettelon \{1, 2, 3\} ensimmäinen arvo
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2
Selvitä luettelon \{\} ensimmäinen arvo Jos luettelo on tyhjä, palauta arvo -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
