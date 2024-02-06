---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


指定した列にマップされている属性を折りたたんで、キューブのフィルター コンテキストの次元の粒度を変更します。


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

指定した列 <code>columnNames</code> にマップされている属性を折りたたんで、<code>cube</code> のフィルター コンテキストの次元の粒度を変更します。キューブの表形式からも列が削除されます。



## Category
Cube
