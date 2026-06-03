---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


將指定的維度資料表合併入立方的篩選內容，並展開指定的維度屬性集以變更篩選內容的維度資料粒度。


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

將指定的維度資料表 `dimensionSelector` 合併入 `cube` 的篩選內容，並展開指定的維度屬性集 `attributeNames` 以變更維度資料粒度。維度屬性會加到內含名稱為 `newColumnNames` (如果未指定則為 `attributeNames`) 之資料行的表格式檢視。



## Category
Cube
