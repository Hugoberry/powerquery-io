---
title: Date.From
---

# Date.From


指定された値から日付を作成します。


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

指定された <code>value</code> から <code>date</code> 値を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。指定された <code>value</code> が <code>null</code> の場合、<code>Date.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>date</code> の場合、<code>value</code> が返されます。次の型の値を <code>date</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト形式の表記からの <code>date</code> 値。詳細については <code>Date.FromText</code> を参照してください。</li>        <li><code>datetime</code>: <code>value</code> の日付部分。</li>        <li><code>datetimezone</code>: <code>value</code> に相当するローカル datetime の日付部分。</li>        <li><code>number</code>: <code>value</code> によって表される OLE オートメーション日付に相当する datetime の日付部分。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;43910&lt;/code&gt; を &lt;code&gt;date&lt;/code&gt; 値に変換します。
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; を &lt;code&gt;date&lt;/code&gt; 値に変換します。
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
