---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

지정된 출력 위치를 사용하여 텍스트 목록을 결합하는 함수를 반환합니다.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

지정된 출력 위치를 사용하여 텍스트 값 목록을 단일 텍스트 값으로 결합하는 함수를 반환합니다.


## Examples

### Example #1 
텍스트 값 목록을 지정된 위치의 출력에 배치하여 결합합니다.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
