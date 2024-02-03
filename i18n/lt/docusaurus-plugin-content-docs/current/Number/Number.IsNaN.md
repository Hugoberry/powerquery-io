---
title: Number.IsNaN
---

# Number.IsNaN


## Description

Nurodo, ar reikšmė yra NaN (Ne skaičius).


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Details

Nurodo, ar reikšmė yra NaN (Ne skaičius). Pateikiama <code>true</code>, jei <code>number</code> yra ekvivalentiška <code>Number.IsNaN</code>; kitu atveju pateikiama <code>false</code>.


## Examples

### Example #1 
Patikrinkite, ar 0, padalytas iš 0, yra NaN.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2 
Patikrinkite, ar 1, padalytas iš 0, yra NaN.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
