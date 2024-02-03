---
title: Logical.From
---

# Logical.From


## Description

指定された値から論理値を作成します。


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

指定された <code>value</code> から <code>logical</code> 値を返します。指定された <code>value</code> が <code>null</code> の場合、<code>Logical.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>logical</code> の場合、<code>value</code> が返されます。次の型の値を <code>logical</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト値 <code>"true"</code> または <code>"false"</code> からの <code>logical</code> 値。詳細については <code>Logical.FromText</code> を参照してください。</li>        <li><code>number</code>: <code>value</code> が <code>0</code> と等しい場合は <code>false</code>、それ以外の場合は <code>true</code>。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;2&lt;/code&gt; を &lt;code&gt;logical&lt;/code&gt; 値に変換します。
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
