---
title: Number.RoundUp
---

# Number.RoundUp


## Description

Pateikiamas paskesnis didžiausias skaičius. Galima nurodyti skaitmenų skaičių.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Details

Pateikiamas <code>number</code> apvalinimo iki kito didžiausio sveikojo skaičiaus rezultatas. Jei <code>number</code> yra null, ši funkcija pateikia null.    Jei nurodyta <code>digits</code>, <code>number</code> suapvalinama iki nurodyto dešimtainių skaitmenų skaičiaus.  


## Examples

### Example #1 
Apvalinkite 1,234 į didesniąją pusę iki sveikojo skaičiaus.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2 
Apvalinkite 1,999 į didesniąją pusę iki sveikojo skaičiaus.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3 
Suapvalinkite 1,234 iki dviejų dešimtainių dalių.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
