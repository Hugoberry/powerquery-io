---
title: Number.IntegerDivide
---

# Number.IntegerDivide


Membagi dua bilangan dan menampilkan bagian bilangan bulat dari hasil.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Remarks

Mengembalikan bagian bilangan bulat dari hasil setelah membagi bilangan, `number1`, dengan bilangan lain, `number2`. Jika `number1` atau `number2` adalah null, `Number.IntegerDivide` akan menghasilkan null.

-   `number1`: Dividen.
-   `number2`: Pembagi.


## Examples

### Example #1
Membagi 6 dengan 4.
```powerquery
Number.IntegerDivide(6, 4)
```

Result: 
```powerquery
1
```


### Example #2
Membagi 8,3 dengan 3.
```powerquery
Number.IntegerDivide(8.3, 3)
```

Result: 
```powerquery
2
```




## Category
Number.Operations
