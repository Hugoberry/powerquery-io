---
title: Binary.View
---

# Binary.View


## Description

使用用户定义的处理程序创建或扩展二进制，从而执行查询和操作操作。


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

返回 <code>binary</code> 视图，其中在将操作应用于视图时，使用 <code>handlers</code> 中指定的函数代替操作的默认行为。<br />如果已提供 <code>binary</code>，则所有处理程序函数都为可选项。如果未提供 <code>binary</code>，则<code>GetStream</code>处理程序函数为必需项。如果未为操作指定处理程序函数，则操作的默认行为会应用于 <code>binary</code> (<code>GetExpression</code>除外)。<br />处理程序函数必须返回值，该值在语义上等效于对 <code>binary</code> 应用操作的结果(或在<code>GetExpression</code>情况下生成的视图)。<br />如果处理程序函数引发错误，则操作的默认行为会应用于视图。<br /><code>Binary.View</code>可用于实现数据源的折叠 - 将 M 查询转换为特定于源的操作(例如，用于下载文件的一部分)。<br />请参阅已发布的 Power Query 自定义连接器文档，从而了解有关 <code>Binary.View</code>的更完整的说明。<br />


## Examples

### Example #1 
创建无需访问数据即可确定长度的基本视图。
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
