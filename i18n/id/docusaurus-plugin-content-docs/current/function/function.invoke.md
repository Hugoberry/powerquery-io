---
title: Function.Invoke
---

# Function.Invoke


Memanggil fungsi yang diberikan.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Menggunakan fungsi tertentu dengan daftar argumen yang ditetapkan dan memberikan hasil.


## Examples

### Example #1
Memanggil Record.FieldNames dengan satu argumen \[A=1,B=2\].
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
