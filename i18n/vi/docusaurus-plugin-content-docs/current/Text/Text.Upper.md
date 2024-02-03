---
title: Text.Upper
---

# Text.Upper


## Description

Chuyển đổi tất cả ký tự thành chữ hoa.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Trả về kết quả chuyển đổi tất cả ký tự trong <code>text</code> thành chữ hoa. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "en-US").


## Examples

### Example #1 
Nhân phiên bản chữ hoa của &#34;aBcD&#34;.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
