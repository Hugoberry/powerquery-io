---
title: Splitter.SplitTextByRepeatedLengths
---

# Splitter.SplitTextByRepeatedLengths


Trả về một hàm tách văn bản thành một danh sách văn bản sau độ dài được chỉ định lặp đi lặp lại.


## Syntax

```powerquery
Splitter.SplitTextByRepeatedLengths(
    length as number,
    optional startAtEnd as logical
) as function
```


## Remarks

Trả về một hàm tách văn bản thành một danh sách văn bản sau độ dài được chỉ định lặp đi lặp lại.


## Examples

### Example #1 
Liên tục tách dữ liệu đầu vào thành các khúc gồm ba ký tự, kể từ đoạn đầu của dữ liệu đầu vào.
```powerquery
Splitter.SplitTextByRepeatedLengths(3)("12345678")
```

Result: 
```powerquery
{"123", "456", "78"}
```


### Example #2 
Liên tục tách dữ liệu đầu vào thành các khúc gồm ba ký tự, kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRepeatedLengths(3, startAtEnd)("87654321")
```

Result: 
```powerquery
{"87", "654", "321"}
```




## Category
Splitter
