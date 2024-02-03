---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Palauttaa kohteen <code>text</code> osan määritetyn kohteen <code>delimiter</code> jälkeen.    Valinnainen luku <code>index</code> ilmaisee, mitä kohteen <code>delimiter</code> esiintymää tulee käsitellä.    Valinnainen luettelo <code>index</code> ilmaisee, mitä kohteen <code>delimiter</code> esiintymää tulee käsitellä, sekä pitääkö indeksointi tehdä syötteen alusta vai lopusta.


## Examples

### Example #1 
Hae kohteen 111-222-333 osa (ensimmäisen) yhdysmerkin jälkeen.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Hae kohteen 111-222-333 osa toisen yhdysmerkin jälkeen.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Hae kohteen 111-222-333 osa toisen yhdysmerkin jälkeen lopusta.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
