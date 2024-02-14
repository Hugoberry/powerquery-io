---
title: Function.Invoke
---

# Function.Invoke


Verilen işlevi çağırır


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Belirtilen bağımsız değişken listesini kullanarak verilen işlevi çağırır ve sonucu döndürür.


## Examples

### Example #1 
Bir bağımsız değişken ile Record.FieldNames öğesini çağırır [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
