---
title: Text.Lower
---

# Text.Lower


Chuyển đổi tất cả các ký tự thành chữ thường.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Trả về kết quả chuyển đổi tất cả ký tự trong `text` thành chữ thường. `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1
Nhận phiên bản chữ thường của "AbCd".
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
