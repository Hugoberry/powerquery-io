---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Divise deux nombres et retourne la partie d'entier du résultat.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Retourne la partie entière du résultat de la division d'un nombre `number1` par un autre nombre `number2`. Si `number1` ou `number2` ont la valeur null, `Number.IntegerDivide` retourne null.

-   `number1` : dividende.
-   `number2` : diviseur.


## Examples

### Example #1
Divise 6 par 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Divise 8,3 par 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
