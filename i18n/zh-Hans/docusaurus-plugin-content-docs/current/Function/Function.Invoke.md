---
title: Function.Invoke
---

# Function.Invoke


## Description

调用给定的函数


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

使用指定的参数列表调用给定的函数并返回结果。


## Examples

### Example #1 
使用一个参数 [A=1,B=2] 调用 Record.FieldNames
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
