---
title: Function.Invoke
---

# Function.Invoke


Gọi ra hàm cho sẵn


## Syntax

```powerquery
Function.Invoke(
    function as function,
    args as list
) as any
```


## Remarks

Gọi ra hàm cho sẵn bằng cách sử dụng danh sách đối số được chỉ định và trả về kết quả.


## Examples

### Example #1 
Gọi ra Record.FieldNames bằng một đối số [A=1,B=2]
```powerquery
Function.Invoke(Record.FieldNames, {[A = 1, B = 2]})
```

Result: 
```powerquery
{"A", "B"}
```




## Category
Function
