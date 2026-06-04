---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Padalijami du skaičiai ir pateikiama sveikoji rezultato dalis.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Pateikiama sveikoji dalis rezultato, gauto padalijus skaičių, `number1`, iš kito skaičiaus, `number2`. Jei `number1` arba `number2` neapibrėžta, `Number.IntegerDivide` pateikia neapibrėžtą reikšmę.

-   `number1`: dalinys.
-   `number2`: daliklis.


## Examples

### Example #1
Padalykite 6 iš 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Padalykite 8,3 iš 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
