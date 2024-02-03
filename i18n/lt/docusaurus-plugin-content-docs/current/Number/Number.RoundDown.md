---
title: Number.RoundDown
---

# Number.RoundDown


## Description

Pateikiamas didžiausias ankstesnis skaičius. Galima nurodyti skaitmenų skaičių.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

Pateikiamas <code>number</code> apvalinimo į mažesniąją pusę iki ankstesnio didžiausio sveikojo skaičiaus rezultatas. Jei <code>number</code> yra null, ši funkcija pateikia null.    Jei nurodyta <code>digits</code>, <code>number</code> suapvalinama iki nurodyto dešimtainių skaitmenų skaičiaus.  


## Examples

### Example #1 
Apvalinkite 1,234 į mažesniąją pusę iki sveikojo skaičiaus.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Apvalinkite 1,999 į mažesniąją pusę iki sveikojo skaičiaus.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
Suapvalinkite 1,999 į mažėjimo pusę iki dviejų dešimtųjų dalių.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
