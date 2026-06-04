---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Jakaa kaksi lukua ja palauttaa tuloksen kokonaislukuosan.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Palauttaa luvun `number1` toisella luvulla `number2` jakamisen tuloksen kokonaislukuosan. Jos `number1` tai `number2` on tyhjäarvo, `Number.IntegerDivide` palauttaa tyhjäarvon.

-   `number1`: jaettava.
-   `number2`: jakaja.


## Examples

### Example #1
Jaa luku 6 luvulla 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Jaa luku 8,3 luvulla 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
