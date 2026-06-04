---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Ділить два числа та повертає цілу частку результату.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Повертає цілу частку результату ділення числа `number1` на інше число `number2`. Якщо `number1` або `number2` має Null-значення, функція `Number.IntegerDivide` повертає Null-значення.

-   `number1`: ділене.
-   `number2`: дільник.


## Examples

### Example #1
Поділити 6 на 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Поділити 8,3 на 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
