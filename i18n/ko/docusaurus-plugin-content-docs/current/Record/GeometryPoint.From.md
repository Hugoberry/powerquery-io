---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

파트에서 기하학적 지점을 나타내는 레코드를 만듭니다.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

X 좌표, Y 좌표 그리고 Z 좌표 및 측정값(M)(있는 경우) 등 해당 구성 파트에서 기하학적 지점을 나타내는 레코드를 만듭니다. 선택적 SRID(공간 참조 식별자)는 기본값(0)과 다른 경우에 지정할 수 있습니다.



## Category
Record.Serialization
