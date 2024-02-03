---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Trả về một hàm tách văn bản thành một danh sách văn bản tại dấu cách.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Trả về một hàm tách văn bản thành một danh sách văn bản tại dấu cách.


## Examples

### Example #1 
Tách dữ liệu đầu vào bằng các khoảng trắng, coi dấu ngoặc kép như tất cả các ký tự khác.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
