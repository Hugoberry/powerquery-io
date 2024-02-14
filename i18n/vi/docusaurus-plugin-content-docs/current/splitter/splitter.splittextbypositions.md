---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


Trả về một hàm tách văn bản thành một danh sách văn bản tại mỗi vị trí được chỉ định.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Remarks

Trả về một hàm tách văn bản thành một danh sách văn bản tại mỗi vị trí được chỉ định.


## Examples

### Example #1 
Tách dữ liệu đầu vào tại vị trí được chỉ định, kể từ đoạn đầu của dữ liệu đầu vào.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
Tách dữ liệu đầu vào tại vị trí được chỉ định, kể từ đoạn cuối của dữ liệu đầu vào.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByPositions({0, 5}, startAtEnd)("Redmond98052")
```

Result: 
```powerquery
{"Redmond", "98052"}
```




## Category
Splitter
