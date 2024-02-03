---
title: Function.Invoke
---

# Function.Invoke


## Description

Menjalankan fungsi yang ditentukan


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Menjalankan fungsi yang ditentukan menggunakan senarai argumen yang khusus dan mengembalikan hasil.


## Examples

### Example #1 
Menjalankan Record.FieldNames dengan satu argumen [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
