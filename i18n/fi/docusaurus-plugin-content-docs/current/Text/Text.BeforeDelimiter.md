---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Palauttaa kohteen <code>text</code> osan ennen määritettyä kohdetta <code>delimiter</code>.    Valinnainen luku <code>index</code> ilmaisee, mitä kohteen <code>delimiter</code> esiintymää tulee käsitellä.    Valinnainen luettelo <code>index</code> ilmaisee, mitä kohteen <code>delimiter</code> esiintymää tulee käsitellä, sekä pitääkö indeksointi tehdä syötteen alusta vai lopusta.


## Examples

### Example #1 
Hae kohteen 111-222-333 osa ennen (ensimmäistä) yhdysmerkkiä.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Hae kohteen 111-222-333 osa ennen toista yhdysmerkkiä.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Hae kohteen 111-222-333 osa ennen toista yhdysmerkkiä lopusta.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
