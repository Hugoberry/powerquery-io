---
title: DateTime.From
---

# DateTime.From


## Description

指定された値から datetime を作成します。


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

指定された <code>value</code> から <code>datetime</code> 値を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。指定された <code>value</code> が <code>null</code> の場合、<code>DateTime.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>datetime</code> の場合、<code>value</code> が返されます。次の型の値を <code>datetime</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト形式の表記からの <code>datetime</code> 値。詳細については <code>DateTime.FromText</code> を参照してください。</li>        <li><code>date</code>: 日付部分が <code>value</code>、時刻部分が <code>12:00:00 AM</code> の <code>datetime</code>。</li>        <li><code>datetimezone</code>: <code>value</code> に相当するローカルの <code>datetime</code>。</li>        <li><code>time</code>: 日付部分が <code>0</code>、時刻部分が <code>value</code> の OLE オートメーション日付に相当する日付 の <code>datetime</code>。</li>        <li><code>number</code>: <code>value</code> で表される OLE オートメーション日付に相当する <code>datetime</code>。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;#time(06, 45, 12)&lt;/code&gt; を &lt;code&gt;datetime&lt;/code&gt; 値に変換します。
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
&lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; を &lt;code&gt;datetime&lt;/code&gt; 値に変換します。
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
