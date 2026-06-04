---
title: List.Last
---

# List.Last


Palauttaa luettelon viimeisen arvon tai määritetyn oletusarvon, jos se on tyhjä.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Palauttaa luettelon viimeisen kohteen tai valinnaisen oletusarvon, jos luettelo on tyhjä.

-   `list`: Tutkittava luettelo.
-   `defaultValue`: Palautettava oletusarvo, jos luettelo on tyhjä (valinnainen). Jos luettelo on tyhjä eikä oletusarvoa ole määritetty, funktio palauttaa `tyhjän arvon`.


## Examples

### Example #1
Selvitä luettelon \{1, 2, 3\} viimeinen arvo.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Selvitä luettelon \{\} viimeinen arvo tai anna arvo -1, jos se on tyhjä.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
