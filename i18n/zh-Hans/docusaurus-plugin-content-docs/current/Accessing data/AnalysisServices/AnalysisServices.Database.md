---
title: AnalysisServices.Database
---

# AnalysisServices.Database


从 Analysis Services 数据库中返回多维数据集或表格模型的表。


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

从服务器 <code>server</code> 上的 Analysis Services 数据库 <code>database</code> 中返回多维数据集或表格模型的表。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>Query</code> : 用于检索数据的本机 MDX 查询。</li><li><code>TypedMeasureColumns</code> : 一个逻辑值，指示在多维模型或表格模型中指定的类型是否用作所添加的度量值列的类型。设置为 false 时，类型 &quot;number&quot; 将用于所有度量值列。此选项的默认值为 false。</li><li><code>Culture</code> : 指定数据区域性的区域性名称。这对应于“区域设置标识符”连接字符串属性。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值与驱动程序相关。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li><li><code>SubQueries</code> : 一个数字(0、1 或 2)，设置连接字符串中 &quot;SubQueries&quot; 属性的值。该数字控制嵌套 select 或子多维数据集上计算成员的行为。(默认值为 2)。</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
