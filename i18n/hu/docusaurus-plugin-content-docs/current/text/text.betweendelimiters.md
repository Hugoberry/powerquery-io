---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


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


## Remarks

`text` részét adja vissza a meghatározott `startDelimiter` és `endDelimiter` között. Egy opcionális `startIndex` szám jelöli, a(z) `startDelimiter` melyik előfordulása legyen számba véve. Egy opcionális `startIndex` lista jelöli, a(z) `startDelimiter` mely előfordulása legyen számba véve, valamint, hogy az indexelés a bevitel elejétől vagy végétől történjen-e. A(z) `endIndex` ehhez hasonló, azzal a különbséggel, hogy az indexelés a(z) `startIndex` értékhez viszonyítva történik.


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
