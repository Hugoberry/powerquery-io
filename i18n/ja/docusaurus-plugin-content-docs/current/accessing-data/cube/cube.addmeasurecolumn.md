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

各行の行コンテキストに適用されるメジャー `measureSelector` の結果を返す `column` という名前の列を `cube` に追加します。次元の粒度やスライスの変更はメジャーの適用に影響します。特定のキューブ操作を実行すると、メジャーの値が調整されます。



## Category
Cube
