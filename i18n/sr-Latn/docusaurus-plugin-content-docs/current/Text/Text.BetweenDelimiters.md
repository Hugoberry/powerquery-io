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

Vraća deo stavke <code>text</code> između navedenih <code>startDelimiter</code> i <code>endDelimiter</code>.    Opcionalni broj <code>startIndex</code> pokazuje koje pojavljivanje stavke <code>startDelimiter</code> treba uzeti u obzir.    Opcionalna lista <code>startIndex</code> pokazuje koje pojavljivanje stavke <code>startDelimiter</code> treba uzeti u obzir, kao i da li indeksiranje treba obaviti od početka ili kraja unosa.    Stavka <code>endIndex</code> je slična, s tim što se indeksiranje obavlja u odnosu na <code>startIndex</code>.


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
