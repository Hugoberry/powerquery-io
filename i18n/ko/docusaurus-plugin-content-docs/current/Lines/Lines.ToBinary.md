---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

지정된 인코딩과 lineSeparator를 사용하여 텍스트 목록을 이진 값으로 변환합니다. 지정된 lineSeparator는 각 줄의 끝에 추가됩니다. lineSeparator가 지정되지 않은 경우에는 캐리지 리턴 및 줄 바꿈 문자가 사용됩니다.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

지정된 인코딩과 lineSeparator를 사용하여 텍스트 목록을 이진 값으로 변환합니다. 지정된 lineSeparator는 각 줄의 끝에 추가됩니다. lineSeparator가 지정되지 않은 경우에는 캐리지 리턴 및 줄 바꿈 문자가 사용됩니다.



## Category
Lines
