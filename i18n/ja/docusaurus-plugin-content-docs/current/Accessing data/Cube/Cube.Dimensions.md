---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

使用できるディメンションのセットを含むテーブルを返します。


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

<code>cube</code> 内の使用できるディメンションのセットを含むテーブルを返します。各ディメンションはディメンション属性のセットを含むテーブルであり、それぞれのディメンション属性がディメンション テーブルの列として表されます。ディメンションは、Cube.AddAndExpandDimensionColumn を使用してキューブ内で展開できます。



## Category
Cube
