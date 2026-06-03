---
title: Text.InferNumberType
---

# Text.InferNumberType


Đưa ra loại số chi tiết (Int64.Type, Double.Type, v.v.) của một số được mã hóa trong văn bản.


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

Đưa ra loại số chi tiết (Int64.Type, Double.Type, v.v.) của `text`. Lỗi sẽ phát sinh nếu `text` không phải một số. `culture` tùy chọn cũng có thể được cung cấp (ví dụ: "vi-VN").



## Category
Text
