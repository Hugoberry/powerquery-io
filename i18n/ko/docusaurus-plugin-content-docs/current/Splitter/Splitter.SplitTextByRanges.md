---
title: Splitter.SplitTextByRanges
---

# Splitter.SplitTextByRanges


## Description

지정된 오프셋 및 길이에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByRanges(
    ranges as list,
    optional startAtEnd as logical
) as function
```


## Details

지정된 오프셋 및 길이에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다. null 길이는 나머지 입력을 모두 포함해야 했음을 나타냅니다.


## Examples

### Example #1 
입력의 시작 부분에서 시작하여 지정된 위치 및 길이 쌍으로 입력을 분할합니다. 이 예의 범위는 겹칩니다.
```powerquery
Splitter.SplitTextByRanges({{0, 4}, {2, 10}})("codelimiter")
```

Result: 
```powerquery
{"code", "delimiter"}
```


### Example #2 
입력 끝에서 시작하여 지정된 위치 및 길이 쌍으로 입력을 분할합니다.
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
입력을 고정 길이 우편 번호와 가변 길이 도시 이름으로 분할합니다.
```powerquery
Splitter.SplitTextByRanges({{0, 5}, {5, null}})("98052Redmond")
```

Result: 
```powerquery
{"98052", "Redmond"}
```




## Category
Splitter
