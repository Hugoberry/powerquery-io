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

Vraća deo stavke `text` između navedenih `startDelimiter` i `endDelimiter`. Opcionalni broj `startIndex` pokazuje koje pojavljivanje stavke `startDelimiter` treba uzeti u obzir. Opcionalna lista `startIndex` pokazuje koje pojavljivanje stavke `startDelimiter` treba uzeti u obzir, kao i da li indeksiranje treba obaviti od početka ili kraja unosa. Stavka `endIndex` je slična, s tim što se indeksiranje obavlja u odnosu na `startIndex`.


## Examples

### Example #1
Preuzmite deo „111 (222) 333 (444)“ između (prve) otvorene zagrade i (prve) zatvorene zagrade koja sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Preuzmite deo „111 (222) 333 (444)“ između druge otvorene zagrade i prve zatvorene zagrade koja sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Preuzmite deo „111 (222) 333 (444)“ između druge otvorene zagrade od kraja i druge zatvorene zagrade koja sledi.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
