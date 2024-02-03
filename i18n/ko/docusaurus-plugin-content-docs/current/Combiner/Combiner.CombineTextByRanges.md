---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

지정된 위치와 길이를 사용하여 텍스트 목록을 결합하는 함수를 반환합니다.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

지정된 출력 위치와 길이를 사용하여 텍스트 값 목록을 단일 텍스트 값으로 결합하는 함수를 반환합니다. null 길이는 전체 텍스트 값을 포함해야 함을 나타냅니다.


## Examples

### Example #1 
지정된 출력 위치와 길이를 사용하여 텍스트 값 목록을 결합합니다.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
