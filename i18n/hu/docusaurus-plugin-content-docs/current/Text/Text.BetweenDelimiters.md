---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Details

<code>text</code> részét adja vissza a meghatározott <code>startDelimiter</code> és <code>endDelimiter</code> között.    Egy opcionális <code>startIndex</code> szám jelöli, a(z) <code>startDelimiter</code> melyik előfordulása legyen számba véve.    Egy opcionális <code>startIndex</code> lista jelöli, a(z) <code>startDelimiter</code> mely előfordulása legyen számba véve, valamint, hogy az indexelés a bevitel elejétől vagy végétől történjen-e.    A(z) <code>endIndex</code> ehhez hasonló, azzal a különbséggel, hogy az indexelés a(z) <code>startIndex</code> értékhez viszonyítva történik.


## Examples

### Example #1 
„111 (222) 333 (444)” részének lekérése az (első) nyitó zárójel és az azt követő (első) záró zárójel között.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Az „111 (222) 333 (444)” azon részének lekérése, ami a második nyitó zárójel és az azt követő első záró zárójel között van.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Az „111 (222) 333 (444)” azon részének lekérése, ami az utolsó előtti nyitó zárójel és az azt követő második záró zárójel között van.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
