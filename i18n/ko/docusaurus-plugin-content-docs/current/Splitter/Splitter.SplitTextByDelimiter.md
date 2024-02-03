---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

지정된 구분 기호에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

지정된 구분 기호에 따라 텍스트를 텍스트 목록으로 분할하는 함수를 반환합니다.


## Examples

### Example #1 
따옴표로 묶인 쉼표를 무시하고 입력을 쉼표로 나눕니다.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
