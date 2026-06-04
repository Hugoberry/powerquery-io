---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Palauttaa kohteen `text` osan ennen määritettyä kohdetta `delimiter`. Valinnainen luku `index` ilmaisee, mitä kohteen `delimiter` esiintymää tulee käsitellä. Valinnainen luettelo `index` ilmaisee, mitä kohteen `delimiter` esiintymää tulee käsitellä, sekä pitääkö indeksointi tehdä syötteen alusta vai lopusta.


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
