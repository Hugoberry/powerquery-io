---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


Trả về một hàm tách văn bản thành một danh sách văn bản tại mỗi dấu tách được chỉ định theo trình tự.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Remarks

Trả về một hàm tách văn bản thành một danh sách văn bản tại mỗi dấu tách được chỉ định theo trình tự.


## Examples

### Example #1 
Tách dữ liệu đầu vào bằng dấu phẩy, rồi bằng dấu chấm phẩy, kể từ đoạn đầu của dữ liệu đầu vào.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
Tách dữ liệu đầu vào bằng dấu phẩy, rồi bằng dấu chấm phẩy, coi dấu ngoặc kép như tất cả các ký tự khác và kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
