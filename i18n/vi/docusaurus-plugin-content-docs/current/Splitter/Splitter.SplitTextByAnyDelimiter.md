---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


Trả về một hàm tách văn bản thành một danh sách văn bản tại bất kỳ dấu tách nào được chỉ định.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Trả về một hàm tách văn bản thành một danh sách văn bản tại bất kỳ dấu tách nào được chỉ định.


## Examples

### Example #1 
Tách dữ liệu đầu vào bằng dấu phẩy hoặc dấu chấm phẩy, bỏ qua dấu ngoặc kép và dấu phân tách trong trích dẫn, kể từ đoạn đầu của dữ liệu đầu vào.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
Tách dữ liệu đầu vào bằng dấu phẩy hoặc dấu chấm phẩy, bỏ qua dấu ngoặc kép và dấu phân tách trong trích dẫn, kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
