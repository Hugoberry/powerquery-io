---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Membahagikan dua nombor dan mengembalikan bahagian integer daripada hasil.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Mengembalikan bahagian integer daripada hasil membahagikan nombor, `number1`, dengan nombor lain, `number2`. Jika `number1` atau `number2` adalah nol, `Number.IntegerDivide` mengembalikan nol.

-   `number1`: Pembahagi.
-   `number2`: Pembahagi.


## Examples

### Example #1
Bahagikan 6 dengan 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Bahagikan 8.3 dengan 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
