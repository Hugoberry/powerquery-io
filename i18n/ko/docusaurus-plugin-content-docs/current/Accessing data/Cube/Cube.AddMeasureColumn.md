---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

각 행의 행 컨텍스트에 적용된 측정값의 결과를 포함하는 큐브에 열을 추가합니다.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

각 행의 행 컨텍스트에 적용된 측정값 <code>measureSelector</code>의 결과를 포함하는 <code>cube</code>에 이름이 <code>column</code>인 열을 추가합니다. 측정값 적용은 변경된 차원 세분성 및 조각화의 영향을 받습니다. 측정값은 특정 큐브 작업이 수행된 다음에 조정됩니다.



## Category
Cube
