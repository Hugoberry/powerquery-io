---
title: Splitter.SplitTextByEachDelimiter
---

# Splitter.SplitTextByEachDelimiter


## Description

지정된 각 구분 기호에서 순서대로 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByEachDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

지정된 각 구분 기호에서 순서대로 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Examples

### Example #1 
입력의 시작 부분부터 시작하여 입력을 쉼표로 나눈 다음 세미콜론으로 나눕니다.
```powerquery
Splitter.SplitTextByEachDelimiter({",", ";"})("a,b;c,d")
```

Result: 
```powerquery
{"a", "b", "c,d"}
```


### Example #2 
입력을 쉼표로 나눈 다음 세미콜론으로 분할하고 따옴표를 다른 문자처럼 처리하고 입력 끝에서 시작합니다.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByEachDelimiter({",", ";"}, QuoteStyle.None, startAtEnd)("a,""b;c"",d")
```

Result: 
```powerquery
{"a,""b", "c""", "d"}
```




## Category
Splitter
