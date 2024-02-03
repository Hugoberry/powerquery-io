---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

파트에서 지리적 지점을 나타내는 레코드를 만듭니다.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

경도, 위도 그리고 표고(Z) 및 측정값(M)(있는 경우) 등 해당 구성 파트에서 지리적 지점을 나타내는 레코드를 만듭니다. 선택적 SRID(공간 참조 식별자)는 기본값(4326)과 다른 경우에 지정할 수 있습니다.



## Category
Record.Serialization
