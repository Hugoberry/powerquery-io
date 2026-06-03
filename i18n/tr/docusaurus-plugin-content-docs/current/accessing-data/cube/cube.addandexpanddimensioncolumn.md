---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Belirtilen boyut tablosunu küpün filtre bağlamıyla birleştirir ve belirtilen boyut öznitelikleri kümesini genişleterek filtre bağlamının boyut parçalı yapısını değiştirir.


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

Belirtilen `dimensionSelector` boyut tablosunu küpün `cube` filtre bağlamıyla birleştirir ve belirtilen boyut öznitelikleri `attributeNames` kümesini genişleterek boyut parçalı yapısını değiştirir. Boyut öznitelikleri, `newColumnNames` olarak veya belirtilmemişse `attributeNames` olarak adlandırılmış sütunlarla tablo görünümüne eklenir.



## Category
Cube
