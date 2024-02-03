---
title: Combiner.CombineTextByEachDelimiter
---

# Combiner.CombineTextByEachDelimiter


## Description

구분 기호 시퀀스를 사용하여 텍스트 목록을 결합하는 함수를 반환합니다.


## Syntax

```powerquery
Combiner.CombineTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

구분 기호 시퀀스를 사용하여 텍스트 값 목록을 단일 텍스트 값으로 결합하는 함수를 반환합니다.


## Examples

### Example #1 
구분 기호 시퀀스를 사용하여 텍스트 값 목록을 결합합니다.
```powerquery
Combiner.CombineTextByEachDelimiter({"=", "+"})({"a", "b", "c"})
```

Result: 
```powerquery
"a=b+c"
```




## Category
Combiner
