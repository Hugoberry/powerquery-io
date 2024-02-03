---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

이진 스트림 읽고 스트림의 콘텐츠 형식 및 형식 정보를 확인하려고 합니다.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

유추된 MIME 형식이 포함된 Content.Type 필드가 있는 레코드를 반환합니다.    유추된 콘텐츠 형식이 text/\*이고 인코딩 코드 페이지가 검색되는 경우 스트림의 인코딩이 포함된 Content.Encoding 필드가 추가로 반환됩니다.    유추된 콘텐츠 형식이 text/csv이고 형식에 구분 기호가 사용되면 사용 가능한 구분 기호를 분석하기 위한 테이블이 포함된 Csv.PotentialDelimiter 필드가 추가로 반환됩니다.    유추된 콘텐츠 형식이 text/csv이고 가변 폭 형식이면 사용 가능한 고정 폭 열 위치를 분석하기 위한 목록이 포함된 Csv.PotentialPositions 필드가 추가로 반환됩니다.



## Category
Binary
