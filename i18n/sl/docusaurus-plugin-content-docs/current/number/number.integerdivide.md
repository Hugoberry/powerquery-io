---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Deli dve števili in vrne del celega števila rezultata.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Vrne del celega števila rezultata deljenja števila `number1` s številom `number2`. Če ima `number1` ali `number2` ničelno vrednost, `Number.IntegerDivide` vrne"null".

-   `number1`: deljenec.
-   `number2`: delitelj.


## Examples

### Example #1
Delite število 6 s številom 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Delite število 8,3 s številom 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
