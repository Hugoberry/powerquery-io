---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


各行の行コンテキストに適用されるメジャーの結果を返す列をキューブに追加します。


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

各行の行コンテキストに適用されるメジャー <code>measureSelector</code> の結果を返す <code>column</code> という名前の列を <code>cube</code> に追加します。次元の粒度やスライスの変更はメジャーの適用に影響します。特定のキューブ操作を実行すると、メジャーの値が調整されます。



## Category
Cube
