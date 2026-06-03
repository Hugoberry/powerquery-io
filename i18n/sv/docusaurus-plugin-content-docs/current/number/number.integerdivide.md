---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Dividerar två tal och returnerar heltalsdelen av resultatet.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Returnerar heltalsdelen av resultatet från divisionen av ett tal, `number1`, med ett annat tal, `number2`. Om `number1` eller `number2` är null returnerar `Number.IntegerDivide` null.

-   `number1`: Täljaren.
-   `number2`: Nämnaren.


## Examples

### Example #1
Dividera 6 med 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Dividera 8,3 med 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
