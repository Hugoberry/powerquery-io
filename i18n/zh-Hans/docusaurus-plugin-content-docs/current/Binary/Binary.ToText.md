---
title: Binary.ToText
---

# Binary.ToText


## Description

将二进制数据解码为文本格式。


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

返回将数值 <code>binary</code> 的二进制列表转换为文本值的结果。或者，可以指定 <code>encoding</code> 以便指示要在生成的文本值中使用的编码      以下 <code>BinaryEncoding</code> 值可用于 <code>encoding</code>。      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 编码</li>        <li><code>BinaryEncoding.Hex</code>: 十六进制编码</li>      </ul>



## Category
Binary
