---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


指定したディメンション テーブルをキューブのフィルター コンテキストにマージし、指定したディメンション属性のセットを展開してフィルター コンテキストの次元の粒度を変更します。


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

指定したディメンション テーブル `dimensionSelector` を `cube` のフィルター コンテキストにマージし、ディメンション属性の指定したセット `attributeNames` を展開して、ディメンションの粒度を変更します。ディメンション属性は、表形式の `newColumnNames` (指定しない場合は `attributeNames`) という名前の列に追加されます。



## Category
Cube
