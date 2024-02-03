---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


## Description

구조적 기하학적 지점 값을 WKT(Well-Known Text) 표현으로 변환합니다.


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Details

OGC(Open Geospatial Consortium)에서 정의한 대로 구조적 기하학적 지점 값을 WKT(Well-Known Text) 표현으로 변환합니다. SQL Server를 포함한 많은 데이터베이스에서 사용되는 직렬화 형식이기도 합니다.



## Category
Record.Serialization
