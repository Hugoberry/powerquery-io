---
title: AtScale.Cubes
---

# AtScale.Cubes


## Description

从 AtScale 中导入/DirectQuery 多维数据集数据。


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Details

从服务器 <code>server</code> 上的 AtScale 返回多维数据集数据。可以指定可选的记录参数 <code>options</code> 来控制以下选项:<ul>        <li><code>TypedMeasureColumns</code>: 指示在多维模型或表格模型中指定的类型是否用于添加的度量值列类型的逻辑值。设置为 false 时，类型 "number" 将用于所有度量值列。此选项的默认值为 false。</li>        <li><code>CommandTimeout</code>: 一个时间段(以秒为单位)，控制在取消服务器端查询前允许其运行的时间。默认值与驱动程序相关。</li>        <li><code>ConnectionTimeout</code>: 一个时间段(以秒为单位)，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li></ul>记录参数指定为 [option1 = value1, option2 = value2...]。


