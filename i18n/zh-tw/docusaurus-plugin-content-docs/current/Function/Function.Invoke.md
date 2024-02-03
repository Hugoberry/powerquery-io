---
title: Function.Invoke
---

# Function.Invoke


## Description

叫用指定的函數


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

使用指定的引數清單叫用指定的函數，然後傳回結果。


## Examples

### Example #1 
使用一個引數 [A=1,B=2] 叫用 Record.FieldNames
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
