---
title: Time.From
---

# Time.From


指定された値から時刻を作成します。


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

指定された <code>value</code> から <code>time</code> 値を返します。省略可能な <code>culture</code> を指定することもできます (例: "en-US")。指定された <code>value</code> が <code>null</code> の場合、<code>Time.From</code> は <code>null</code> を返します。指定された <code>value</code> が <code>time</code> の場合、<code>value</code> が返されます。次の型の値を <code>time</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト形式の表記からの <code>time</code> 値。詳細については <code>Time.FromText</code> を参照してください。</li>        <li><code>datetime</code>: <code>value</code> の時刻部分。</li>        <li><code>datetimezone</code>: <code>value</code> に相当するローカル datetime の時刻部分。</li>        <li><code>number</code>: <code>value</code> で表される小数の日数に相当する <code>time</code>。<code>value</code> が負の値か、1 以上の場合は、エラーが返されます。</li>      </ul><code>value</code> が他の型の場合、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;0.7575&lt;/code&gt; を &lt;code&gt;time&lt;/code&gt; 値に変換します。
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
&lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; を &lt;code&gt;time&lt;/code&gt; 値に変換します。
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
