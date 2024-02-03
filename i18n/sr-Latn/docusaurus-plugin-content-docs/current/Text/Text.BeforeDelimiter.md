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

Vraća deo stavke <code>text</code> pre navedenog <code>delimiter</code>.    Opcionalni broj <code>index</code> pokazuje koje pojavljivanje stavke <code>delimiter</code> treba uzeti u obzir.    Opcionalna lista <code>index</code> pokazuje koje pojavljivanje stavke <code>delimiter</code> treba uzeti u obzir, kao i da li indeksiranje treba obaviti od početka ili kraja unosa.


## Examples

### Example #1 
Preuzmite deo „111-222-333“ pre (prve) crtice.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Preuzmite deo „111-222-333“ pre druge crtice.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Preuzmite deo „111-222-333“ pre druge crtice od kraja.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
