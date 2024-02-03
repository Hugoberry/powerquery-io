---
title: Function.Invoke
---

# Function.Invoke


## Description

指定された関数を呼び出します


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

指定された引数のリストを使用して特定の関数を呼び出し、結果を返します。


## Examples

### Example #1 
1 つの引数 [A=1,B=2] で Record.FieldNames を呼び出します
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
