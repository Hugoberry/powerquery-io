---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

이진 값을 줄 바꿈으로 분할된 텍스트 값의 목록으로 변환합니다. 따옴표 스타일을 지정할 경우 줄 바꿈은 따옴표 내에 나타날 수 있습니다. includeLineSeparators가 true이면 줄 바꿈 문자가 텍스트에 삽입됩니다.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

이진 값을 줄 바꿈으로 분할된 텍스트 값의 목록으로 변환합니다. 따옴표 스타일을 지정할 경우 줄 바꿈은 따옴표 내에 나타날 수 있습니다. includeLineSeparators가 true이면 줄 바꿈 문자가 텍스트에 삽입됩니다.



## Category
Lines
