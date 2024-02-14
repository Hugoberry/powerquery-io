---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


Trả về một hàm kết hợp một danh sách văn bản bằng cách sử dụng một trình tự dấu tách.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

Trả về một hàm kết hợp một danh sách giá trị văn bản thành một giá trị văn bản đơn bằng cách sử dụng trình tự dấu tách.


## Examples

### Example #1 
Kết hợp một danh sách giá trị văn bản bằng một trình tự dấu tách.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
