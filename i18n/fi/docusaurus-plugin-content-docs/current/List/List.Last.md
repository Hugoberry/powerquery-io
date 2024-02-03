---
title: List.Last
---

# List.Last


## Description

Palauttaa luettelon viimeisen arvon tai määritetyn oletusarvon, jos se on tyhjä.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Palauttaa luettelon <code>list</code> viimeisen kohteen tai valinnaisen oletusarvon <code>defaultValue</code>, jos luettelo on tyhjä.    Jos luettelo on tyhjä, eikä oletusarvoa ole määritetty, funktio palauttaa arvon <code>null</code>.


## Examples

### Example #1 
Selvitä luettelon \{1, 2, 3} viimeinen arvo.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Selvitä luettelon \{} viimeinen arvo tai anna arvo -1, jos se on tyhjä.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
