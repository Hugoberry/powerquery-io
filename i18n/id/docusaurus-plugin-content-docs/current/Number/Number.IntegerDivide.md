---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Membagi dua bilangan dan menampilkan bagian bilangan bulat dari hasil.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Mengembalikan bagian bilangan bulat dari hasil setelah membagi bilangan, <code>number1</code>, dengan bilangan lain, <code>number2</code>.    Jika <code>number1</code> atau <code>number2</code> adalah null, <code>Number.IntegerDivide</code> akan menghasilkan null.      <ul>        <li><code>number1</code>: Dividen.</li>        <li><code>number2</code>: Pembagi.</li>      </ul>


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
