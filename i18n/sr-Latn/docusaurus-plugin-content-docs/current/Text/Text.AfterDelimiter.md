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

Vraća deo stavke <code>text</code> nakon navedenog <code>delimiter</code>.    Opcionalni broj <code>index</code> pokazuje koje pojavljivanje stavke <code>delimiter</code> treba uzeti u obzir.    Opcionalna lista <code>index</code> pokazuje koje pojavljivanje stavke <code>delimiter</code> treba uzeti u obzir, kao i da li indeksiranje treba obaviti od početka ili kraja unosa.


## Examples

### Example #1 
Preuzmite deo „111-222-333“ posle (prve) crtice.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Preuzmite deo „111-222-333“ posle druge crtice.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Preuzmite deo „111-222-333“ posle druge crtice od kraja.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
