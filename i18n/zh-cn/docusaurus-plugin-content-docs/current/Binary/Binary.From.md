---
title: Binary.From
---

# Binary.From


## Description

从给定的值创建一个二进制值


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

从给定的 <code>value</code> 返回 <code>binary</code> 值。如果给定的 <code>value</code> 是 <code>null</code>，则 <code>Binary.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>binary</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>binary</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>binary</code> 值。有关详细信息，请参阅 <code>Binary.FromText</code>。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
获取 &lt;code&gt;&#34;1011&#34;&lt;/code&gt; 的 &lt;code&gt;binary&lt;/code&gt; 值。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
