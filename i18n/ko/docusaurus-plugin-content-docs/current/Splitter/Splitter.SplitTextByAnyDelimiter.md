---
title: Splitter.SplitTextByAnyDelimiter
---

# Splitter.SplitTextByAnyDelimiter


## Description

지정된 구분 기호에서 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByAnyDelimiter(
    delimiters as list,
    optional quoteStyle as QuoteStyle.Type,
    optional startAtEnd as logical
) as function
```


## Details

지정된 구분 기호에서 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Examples

### Example #1 
따옴표와 따옴표로 묶인 구분 기호를 무시하고 입력의 시작 부분부터 시작하여 쉼표 또는 세미콜론으로 입력을 분할합니다.
```powerquery
Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv)("a,b;""c,d;e"",f")
```

Result: 
```powerquery
{"a", "b", "c,d;e", "f"}
```


### Example #2 
따옴표와 따옴표로 묶인 구분 기호를 무시하고 입력 끝에서 시작하여 쉼표 또는 세미콜론으로 입력을 분할합니다.
```powerquery
let
    startAtEnd = true
in
    Splitter.SplitTextByAnyDelimiter({",", ";"}, QuoteStyle.Csv, startAtEnd)("a,""b;c,d")
```

Result: 
```powerquery
{"a,b", "c", "d"}
```




## Category
Splitter
