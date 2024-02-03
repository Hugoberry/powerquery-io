---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

지정된 차원 테이블을 큐브의 필터 컨텍스트로 병합하고 지정된 차원 특성 집합을 확장해서 필터 컨텍스트의 차원 세분성을 변경합니다.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

지정된 차원 테이블 <code>dimensionSelector</code>을(를) 큐브 <code>cube</code>의 필터 컨텍스트로 병합하고 지정된 차원 특성의 <code>attributeNames</code> 집합을 확장해서 차원 세분성을 변경합니다. 차원 특성은 이름이 <code>newColumnNames</code> 또는 <code>attributeNames</code>(지정되지 않은 경우)인 테이블 형식 뷰에 추가됩니다.



## Category
Cube
