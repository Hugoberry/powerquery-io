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

指定したディメンション テーブル <code>dimensionSelector</code> をキューブ <code>cube</code> のフィルター コンテキストにマージし、指定したディメンション属性のセット <code>attributeNames</code> を展開して次元の粒度を変更します。ディメンション属性は、表形式の <code>newColumnNames</code> (指定しない場合は <code>attributeNames</code>) という名前の列に追加されます。



## Category
Cube
