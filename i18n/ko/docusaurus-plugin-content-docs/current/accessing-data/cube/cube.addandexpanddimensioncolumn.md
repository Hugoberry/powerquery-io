---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


지정된 차원 테이블을 큐브의 필터 컨텍스트에 병합하고 지정된 차원 특성 집합을 확장하여 필터 컨텍스트의 차원 세분성을 변경합니다.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

지정된 차원 테이블 `dimensionSelector`을(를) `cube`의 필터 컨텍스트에 병합하고 지정된 차원 특성의 집합 `attributeNames`을(를) 확장하여 차원 세분성을 변경합니다. 차원 특성은 `newColumnNames` 또는 `attributeNames`(이)라는(지정되지 않은 경우) 열이 있는 테이블 형식 뷰에 추가됩니다.



## Category
Cube
