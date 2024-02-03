---
title: Number.ToText
---

# Number.ToText


## Description

Chuyển đổi số đã cho thành văn bản.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Chuyển đổi giá trị dạng số <code>number</code> thành giá trị văn bản theo định dạng được chỉ định bởi <code>format</code>.<br />    <br />    Định dạng là một giá trị văn bản cho biết cách chuyển đổi số. Để biết thêm chi tiết về các giá trị định dạng được hỗ trợ, hãy đi đến https://go.microsoft.com/fwlink/?linkid=2241210 và https://go.microsoft.com/fwlink/?linkid=2240884.<br />    <br />    Ngoài ra, có thể cung cấp tùy chọn <code>culture</code> (ví dụ: "en-US") để kiểm soát hoạt động phụ thuộc vào văn hóa của <code>format</code>.


## Examples

### Example #1 
Chuyển đổi số sang văn bản mà không xác định định dạng.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Chuyển đổi số sang định dạng số mũ.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Chuyển đổi số sang định dạng phần trăm chỉ có một vị trí thập phân.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
