---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Küpe, her satırın bağlamına uygulanan ölçünün sonuçlarını içeren bir sütun ekler.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

`cube` öğesine, her satırın bağlamına uygulanan `measureSelector` ölçüsünün sonuçlarını içeren `column` adlı bir sütun ekler. Ölçü uygulama, boyut parçalı yapısında ve dilimlerinde yapılan değişikliklerden etkilenir. Ölçü değerleri, belirli küp işlemleri yapıldıktan sonra ayarlanır.



## Category
Cube
