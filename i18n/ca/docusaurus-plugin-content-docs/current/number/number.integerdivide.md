---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divideix dos nombres i retorna la part entera del resultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retorna la part entera del resultat a partir de la divisió d'un nombre, `number1`, per un altre nombre, `number2`. Si `number1` o `number2` són nuls, `Number.IntegerDivide` retorna el valor nul.

-   `number1`: dividend.
-   `number2`: divisor.


## Examples

### Example #1
Divideix 6 per 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Divideix 8,3 per 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
