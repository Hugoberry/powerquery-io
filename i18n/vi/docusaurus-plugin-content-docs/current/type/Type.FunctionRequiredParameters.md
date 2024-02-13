---
title: Type.FunctionRequiredParameters
---

# Type.FunctionRequiredParameters


Trả về một số cho biết số nhỏ nhất của tham số cần để gọi loại hàm.


## Syntax

```powerquery
Type.FunctionRequiredParameters(
    type as type
) as number
```


## Remarks

Trả về một số cho biết số nhỏ nhất của tham số cần để gọi đầu vào <code>type</code> của hàm.


## Examples

### Example #1 
Tìm số của tham số cần thiết cho hàm &lt;code&gt;(x là số, y là văn bản tùy chọn)&lt;/code&gt;.
```powerquery
Type.FunctionRequiredParameters(type function (x as number, optional y as text) as any)
```

Result: 
```powerquery
1
```




## Category
Type
