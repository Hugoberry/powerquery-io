---
title: Combiner.CombineTextByLengths
---

# Combiner.CombineTextByLengths


## Description

지정된 길이를 사용하여 텍스트 목록을 결합하는 함수를 반환합니다.


## Syntax

```powerquery
Combiner.CombineTextByLengths(
    lengths as list,
    optional template as text
) as function
```


## Details

지정된 길이를 사용하여 텍스트 값 목록을 단일 텍스트 값으로 결합하는 함수를 반환합니다.


## Examples

### Example #1 
각 입력 값에서 지정된 문자 수를 추출하여 텍스트 값 목록을 결합합니다.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3})({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc"
```


### Example #2 
먼저 결과를 템플릿 텍스트로 미리 채운 후 지정된 문자 수를 추출하여 텍스트 값 목록을 결합합니다.
```powerquery
Combiner.CombineTextByLengths({1, 2, 3}, "*********")({"aaa", "bbb", "ccc"})
```

Result: 
```powerquery
"abbccc***"
```




## Category
Combiner
