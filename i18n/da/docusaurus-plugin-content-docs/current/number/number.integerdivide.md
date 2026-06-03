---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Dividerer to tal og returnerer heltalsdelen af resultatet.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerer heltalsdelen af resultatet efter at have divideret et tal, `number1`, med et andet tal, `number2`. Hvis `number1` eller `number2` er null, returnerer `Number.IntegerDivide` null.

-   `number1`: Dividenden.
-   `number2`: Divisoren.


## Examples

### Example #1
Divider 6 med 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Divider 8,3 med 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
