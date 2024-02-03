---
title: Number.IntegerDivide
---

# Number.IntegerDivide


## Description

Membahagikan dua nombor dan mengembalikan bahagian integer daripada hasil.


## Syntax

```powerquery
Number.IntegerDivide(
    number1 as number,
    number2 as number,
    optional precision as Precision.Type
) as number
```


## Details

Mengembalikan bahagian integer daripada hasil membahagikan nombor, <code>number1</code>, dengan nombor lain, <code>number2</code>.    Jika <code>number1</code> atau <code>number2</code> adalah nol, <code>Number.IntegerDivide</code> mengembalikan nol.      <ul>        <li><code>number1</code>: Pembahagi.</li>        <li><code>number2</code>: Pembahagi.</li>      </ul>


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
