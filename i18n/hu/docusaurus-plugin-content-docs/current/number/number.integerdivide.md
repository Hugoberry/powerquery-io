---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Két szám hányadosának egész részét adja vissza eredményként.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Egy szám (`number1`) másik számmal (`number2`) való osztásából kapott hányados egész szám részét adja vissza eredményként. Ha a(z) `number1` vagy a(z) `number2` érték null, a `Number.IntegerDivide` függvény nullértéket ad vissza.

-   `number1`: Az osztandó.
-   `number2`: Az osztó.


## Examples

### Example #1
6 osztása 4-gyel
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
8,3 osztása 3-mal
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
