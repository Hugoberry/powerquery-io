---
title: Number.Cos
---

# Number.Cos


Visszaadja a szám koszinuszát.


## Syntax

```powerquery
Number.Cos(
    number as number
) as number
```


## Remarks

A megadott szög koszinuszát adja vissza.

-   `number`: Radiánban mért szög.


## Examples

### Example #1
A 0 radiános szög koszinuszának meghatározása
```powerquery
Number.Cos(0)
```

Result: 
```powerquery
1
```


### Example #2
Megkeresi a π radián koszinuszát.
```powerquery
Number.Cos(Number.PI)
```

Result: 
```powerquery
-1
```




## Category
Number.Trigonometry
