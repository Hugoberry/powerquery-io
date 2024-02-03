---
title: Splitter.SplitTextByLengths
---

# Splitter.SplitTextByLengths


## Description

지정된 각 길이에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByLengths(
    lengths as list,
    optional startAtEnd as logical
) as function
```


## Details

지정된 각 길이에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Examples

### Example #1 
입력의 시작 부분부터 시작하여 입력을 처음 두 문자로 나누고 다음 세 문자로 나눕니다.
```powerquery
Splitter.SplitTextByLengths({2, 3})("AB123")
```

Result: 
```powerquery
{"AB", "123"}
```


### Example #2 
입력의 끝에서 시작하여 입력을 처음 세 글자로 나누고 다음 두 글자로 나눕니다.
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
