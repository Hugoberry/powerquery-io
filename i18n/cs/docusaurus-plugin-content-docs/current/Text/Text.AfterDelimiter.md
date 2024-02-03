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

Vrátí část z <code>text</code> po zadaném <code>delimiter</code>.    Volitelná číselná hodnota <code>index</code> označuje, který výskyt <code>delimiter</code> se má brát.    Volitelný seznam <code>index</code> označuje, který výskyt <code>delimiter</code> se má brát, a také jestli se má jeho pořadí počítat od začátku nebo od konce vstupu.


## Examples

### Example #1 
Získat část z „111-222-333“ za (prvním) spojovníkem.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Získat část z „111-222-333“ za druhým spojovníkem.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Získat část z „111-222-333“ za druhým spojovníkem od konce.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
