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

Pateikiama <code>text</code> dalis po nurodyto <code>delimiter</code>.    Pasirenkamas skaitinis <code>index</code> parodo, į kurį <code>delimiter</code> atvejį reikia atsižvelgti.    Pasirenkamas sąrašas <code>index</code> parodo, į kurį <code>delimiter</code> atvejį reikia atsižvelgti ir ar indeksavimą reikia atlikti nuo įvesties pradžios ar galo.


## Examples

### Example #1 
Gauti 111-222-333 dalį po (pirmojo) brūkšnelio.
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Gauti 111-222-333 dalį po antrojo brūkšnelio.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Gauti 111-222-333 dalį po antrojo brūkšnelio nuo galo.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
