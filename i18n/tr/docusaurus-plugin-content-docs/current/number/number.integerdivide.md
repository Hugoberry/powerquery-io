---
title: Number.IntegerDivide
---

# Number.IntegerDivide


İki sayıyı böler ve sonucun tamsayı kısmını döndürür.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

`number1` sayısını başka bir `number2` sayısına bölme işlemi sonucunun tamsayı kısmını döndürür. `number1` veya `number2` null ise `Number.IntegerDivide` null döndürür.

-   `number1`: Bölünen.
-   `number2`: Bölen.


## Examples

### Example #1
6'yı 4'e böler.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
8.3'ü 3'e böler.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
