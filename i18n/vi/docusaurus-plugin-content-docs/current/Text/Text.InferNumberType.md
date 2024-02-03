---
title: Text.InferNumberType
---

# Text.InferNumberType


## Description

Đưa ra loại số chi tiết (Int64.Type, Double.Type, v.v.) của một số được mã hóa trong văn bản.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Details

Đưa ra loại số chi tiết (Int64.Type, Double.Type, v.v.) của <code>text</code>. Lỗi sẽ phát sinh nếu <code>text</code> không phải một số. <code>culture</code> tùy chọn cũng có thể được cung cấp (ví dụ: "vi-VN").



## Category
Text
