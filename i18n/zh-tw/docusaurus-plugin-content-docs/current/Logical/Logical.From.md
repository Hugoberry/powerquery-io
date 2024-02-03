---
title: Logical.From
---

# Logical.From


## Description

根據指定的值建立邏輯。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

從指定的 <code>value</code> 傳回 <code>logical</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Logical.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>logical</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>logical</code> 值:      <ul>        <li><code>text</code>: 根據文字值 (<code>"true"</code> 或 <code>"false"</code>) 產生的 <code>logical</code> 值。如需詳細資料，請參閱 <code>Logical.FromText</code>。</li>        <li><code>number</code>: 若 <code>value</code> 等於 <code>0</code>，即為 <code>false</code>，否則為 <code>true</code>。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;2&lt;/code&gt; 轉換成 &lt;code&gt;logical&lt;/code&gt; 值。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
