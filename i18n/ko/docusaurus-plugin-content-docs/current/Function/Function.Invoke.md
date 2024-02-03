---
title: Function.Invoke
---

# Function.Invoke


## Description

지정된 함수를 호출합니다.


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Details

지정된 인수 목록을 사용하여 지정된 함수를 호출하고 결과를 반환합니다.


## Examples

### Example #1 
하나의 인수 [A=1,B=2]를 사용하여 Record.FieldNames를 호출합니다.
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
