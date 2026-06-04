---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Deli dva broja i vraća deo rezultata koji je ceo broj.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Deli broj, `number1`, drugim brojem, `number2`, i vraća deo rezultata koji je ceo broj. Ako su `number1` ili `number2` bez vrednosti, `Number.IntegerDivide` vraća rezultat bez vrednosti.

-   `number1`: Deljenik.
-   `number2`: Delilac.


## Examples

### Example #1
Deljenje 6 sa 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Deljenje 8,3 sa 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
