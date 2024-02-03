---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


## Description

지정된 열에 매핑된 특성을 축소하여 큐브에 대한 필터 컨텍스트의 차원 세분성을 변경합니다.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Details

지정된 열 <code>columnNames</code>에 매핑된 특성을 축소하여 <code>cube</code>에 대한 필터 컨텍스트의 차원 세분성을 변경합니다. 큐브의 테이블 형식 뷰에서도 열이 제거됩니다.



## Category
Cube
