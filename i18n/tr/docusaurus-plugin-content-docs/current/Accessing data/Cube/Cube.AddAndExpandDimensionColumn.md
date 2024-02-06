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

Belirtilen <code>dimensionSelector</code> boyut tablosunu küpün <code>cube</code> filtre bağlamıyla birleştirir ve belirtilen boyut öznitelikleri <code>attributeNames</code> kümesini genişleterek boyut parçalı yapısını değiştirir. Boyut öznitelikleri, <code>newColumnNames</code> olarak veya belirtilmemişse <code>attributeNames</code> olarak adlandırılmış sütunlarla tablo görünümüne eklenir.



## Category
Cube
