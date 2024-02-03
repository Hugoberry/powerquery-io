---
title: Binary.From
---

# Binary.From


## Description

指定された値からバイナリを作成します


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

指定された <code>value</code> から <code>binary</code> 値を返します。指定された <code>value</code> が <code>null</code> の場合、<code>Binary.From</code> は <code>null</code> を返します。 指定された <code>value</code> が <code>binary</code> の場合、<code>value</code> が返されます。次の型の値を <code>binary</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト表記からの <code>binary</code> 値。詳細については <code>Binary.FromText</code> を参照してください。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;&#34;1011&#34;&lt;/code&gt; の &lt;code&gt;binary&lt;/code&gt; 値を取得します。
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
