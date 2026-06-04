---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Vydelí dve čísla a vráti celočíselnú časť výsledku.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vráti celočíselnú časť výsledku z delenia čísla `number1` iným číslom `number2`. Ak hodnota `number1` alebo `number2` je null, funkcia `Number.IntegerDivide` vráti hodnotu null.

-   `number1`: Delenec.
-   `number2`: Deliteľ.


## Examples

### Example #1
Vydeľte číslo 6 číslom 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Vydeľte číslo 8,3 číslom 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
