---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divide due numeri e restituisce la parte intera del risultato.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Restituisce la parte intera del risultato della divisione di un numero, `number1`, per un altro numero, `number2`. Se `number1` o `number2` è Null, `Number.IntegerDivide` restituisce Null.

-   `number1`: dividendo.
-   `number2`: divisore.


## Examples

### Example #1
Dividere 6 per 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Dividere 8.3 per 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
