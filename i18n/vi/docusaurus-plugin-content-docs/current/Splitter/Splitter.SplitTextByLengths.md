---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

Trả về một hàm tách văn bản thành một danh sách văn bản theo mỗi độ dài được chỉ định.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

Trả về một hàm tách văn bản thành một danh sách văn bản theo mỗi độ dài được chỉ định.


## Examples

### Example #1 
Tách dữ liệu đầu vào thành hai kí tự đầu và ba ký tự tiếp theo, kể từ đoạn đầu của dữ liệu đầu vào.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
Tách dữ liệu đầu vào thành ba kí tự đầu và hai ký tự tiếp theo, kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByLengths({5, 2}, startAtEnd)("RedmondWA98052")
```

Result: 
```powerquery
{"WA", "98052"}
```




## Category
Splitter
