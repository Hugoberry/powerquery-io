---
title: Logical.From
---

# Logical.From


## Description

从给定的值创建逻辑。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

从给定的 <code>value</code> 返回 <code>logical</code> 值。如果给定的 <code>value</code> 是 <code>null</code>，则 <code>Logical.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>logical</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>logical</code> 值:      <ul>        <li><code>text</code>: 来自文本值的 <code>logical</code> 值，可以为 <code>“true”</code> 或 <code>“false”</code>。有关详细信息，请参阅 <code>Logical.FromText</code>。</li>        <li><code>number</code>: 如果 <code>value</code> 等于 <code>0</code>，则为 <code>false</code>，否则为 <code>true</code>。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;2&lt;/code&gt; 转换为 &lt;code&gt;logical&lt;/code&gt; 值。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
