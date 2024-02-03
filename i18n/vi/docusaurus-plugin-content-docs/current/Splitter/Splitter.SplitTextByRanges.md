---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

Trả về một hàm tách văn bản thành một danh sách văn bản theo phần bù và độ dài được chỉ định.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

Trả về một hàm giúp bạn phân tách văn bản thành một danh sách văn bản dựa theo bù trừ và độ dài được chỉ định. Độ dài null thể hiện rằng mọi nội dung nhập còn lại nên được đưa vào.


## Examples

### Example #1 
Tách dữ liệu đầu vào theo cặp vị trí và độ dài được chỉ định, kể từ đoạn đầu của dữ liệu đầu vào. Lưu ý rằng các phạm vi trong ví dụ này sẽ trùng nhau.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
Tách dữ liệu đầu vào theo cặp vị trí và độ dài được chỉ định, kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByRanges({{0, 5}, {6, 2}}, startAtEnd)("RedmondWA?98052")
```

Result: 
```powerquery
{"WA", "98052"}
```


### Example #3 
Phân tách nội dung nhập thành một mã bưu điện có độ dài cố định, tiếp theo là một tên thành phố có độ dài biến thiên.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
