---
title: Parquet.Document
---

# Parquet.Document


## Description

返回 Parquet 文档的内容作为表。


## Syntax

```powerquery
Parquet.Document(
    binary as binary,
    optional options as record
) as any
```


## Details

以表的形式返回 Parquet 文档的内容。选项包括:    <ul>    <li> <code>TypeMapping</code>: 在读取和写入文件时控制默认类型映射的文本值。默认值为 null，并尝试尽可能保留原始类型的保真度。"Sql" 值将生成与 Sql Server.兼容程度最高的结果。</li>    </ul>



## Category
正在访问数据
