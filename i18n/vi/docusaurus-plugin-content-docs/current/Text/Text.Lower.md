---
title: Text.Lower
---

# Text.Lower


## Description

Chuyển đổi tất cả các ký tự thành chữ thường.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Trả về kết quả chuyển đổi tất cả ký tự trong <code>text</code> thành chữ thường. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhận phiên bản chữ thường của &#34;AbCd&#34;.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
