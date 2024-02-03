---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Küpe, her satırın bağlamına uygulanan ölçünün sonuçlarını içeren bir sütun ekler.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

<code>cube</code> öğesine, her satırın bağlamına uygulanan <code>measureSelector</code> ölçüsünün sonuçlarını içeren <code>column</code> adlı bir sütun ekler. Ölçü uygulama, boyut parçalı yapısında ve dilimlerinde yapılan değişikliklerden etkilenir. Ölçü değerleri, belirli küp işlemleri yapıldıktan sonra ayarlanır.



## Category
Cube
