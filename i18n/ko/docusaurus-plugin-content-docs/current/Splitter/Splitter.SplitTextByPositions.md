---
title: Splitter.SplitTextByPositions
---

# Splitter.SplitTextByPositions


## Description

지정된 각 위치에서 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByPositions(
    positions as list,
    optional startAtEnd as logical
) as function
```


## Details

지정된 각 위치에서 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Examples

### Example #1 
입력의 시작 부분부터 시작하여 지정된 위치에서 입력을 분할합니다.
```powerquery
Splitter.SplitTextByPositions({0, 3, 4})("ABC|12345")
```

Result: 
```powerquery
{"ABC", "|", "12345"}
```


### Example #2 
입력의 끝에서 시작하여 지정된 위치에서 입력을 분할합니다.
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
