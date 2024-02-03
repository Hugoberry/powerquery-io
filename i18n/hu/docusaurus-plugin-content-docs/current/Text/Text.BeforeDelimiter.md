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

<code>text</code> részét adja vissza a meghatározott <code>delimiter</code> előtt.    Egy opcionális <code>index</code> szám jelöli, a(z) <code>delimiter</code> melyik előfordulása legyen számba véve.    Egy opcionális <code>index</code> lista jelöli, a(z) <code>delimiter</code> mely előfordulása legyen számba véve, valamint, hogy az indexelés a bevitel elejétől vagy végétől induljon-e.


## Examples

### Example #1 
„111-222-333” részének lekérése az (első) kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
„111-222-333” részének lekérése a második kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
„111-222-333” részének lekérése az utolsó előtti kötőjel előtt.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
