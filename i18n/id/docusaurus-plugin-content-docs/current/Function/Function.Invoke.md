---
title: Function.Invoke
---

# Function.Invoke


## Description

Menggunakan fungsi tertentu


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

Menggunakan fungsi tertentu dengan daftar argumen yang ditetapkan dan memberikan hasil.


## Examples

### Example #1 
Menggunakan Record.FieldNames dengan satu argumen [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
