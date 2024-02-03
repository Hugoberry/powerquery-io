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

Vrátí část z <code>text</code> před zadaným <code>delimiter</code>.    Volitelná číselná hodnota <code>index</code> označuje, který výskyt <code>delimiter</code> se má brát.    Volitelný seznam <code>index</code> označuje, který výskyt <code>delimiter</code> se má brát, a také jestli se má jeho pořadí počítat od začátku nebo od konce vstupu.


## Examples

### Example #1 
Získat část z „111-222-333“ před (prvním) spojovníkem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Získat část z „111-222-333“ před druhým spojovníkem.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Získat část z „111-222-333“ před druhým spojovníkem od konce.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
