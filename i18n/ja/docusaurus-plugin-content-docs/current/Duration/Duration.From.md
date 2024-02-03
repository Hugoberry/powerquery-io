---
title: Duration.From
---

# Duration.From


## Description

指定された値から期間を作成します。


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

指定された <code>value</code> から <code>duration</code> 値を返します。指定された <code>value</code> が <code>null</code> の場合、<code>Duration.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>duration</code> の場合、<code>value</code> が返されます。次の型の値を <code>duration</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト表記の経過時間形式 (d.h:m:s) からの <code>duration</code> 値。詳細については <code>Duration.FromText</code> を参照してください。</li>        <li><code>number</code>: <code>value</code> で表される整数と小数の日数に相当する <code>duration</code>。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;2.525&lt;/code&gt; を &lt;code&gt;duration&lt;/code&gt; 値に変換します。
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
