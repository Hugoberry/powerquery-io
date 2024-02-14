---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


Trả về một hàm tách văn bản thành một danh sách văn bản theo dấu tách được chỉ định.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Trả về một hàm tách văn bản thành một danh sách văn bản theo dấu tách được chỉ định.


## Examples

### Example #1 
Tách dữ liệu đầu vào bằng dấu phẩy, bỏ qua dấu phẩy trong trích dẫn.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
