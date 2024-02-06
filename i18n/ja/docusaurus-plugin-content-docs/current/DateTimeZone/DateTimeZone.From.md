---
title: DateTimeZone.From
---

# DateTimeZone.From


指定された値から datetimezone を作成します。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

与えられた <code>value</code> から <code>datetimezone</code> 値を 1 つ返します。オプションの <code>culture</code> を指定することもできます (例: "en-US")。与えられた <code>value</code> が <code>null</code> の場合、<code>DateTimeZone.From</code> は <code>null</code> を返します。与えられた <code>value</code> が <code>datetimezone</code> の場合、<code>value</code> が返されます。次の型の値を <code>datetimezone</code> 値に変換できます:      <ul>        <li><code>text</code>: テキスト形式の表記からの <code>datetimezone</code> 値。詳細については <code>DateTimeZone.FromText</code> を参照してください。</li>        <li><code>date</code>: 日付部分が <code>value</code>、時刻部分が <code>12:00:00 AM</code>、オフセットがローカル タイム ゾーンに対応する <code>datetimezone</code>。</li>        <li><code>datetime</code>: datetime として<code>value</code>を伴い、オフセットがローカル タイム ゾーンに対応する <code>datetimezone</code>。</li>        <li><code>time</code>: 日付部分が <code>0</code>、時刻部分が <code>value</code>、オフセットがローカル タイム ゾーンに対応する OLE Automation Date に相当する日付の <code>datetimezone</code>。</li>        <li><code>number</code>: <code>value</code> で表される OLE Automation Date に相当する datetime で、オフセットがローカル タイム ゾーンに対応する <code>datetimezone</code>。</li>      </ul><code>value</code> が他の任意の型の場合は、エラーが返されます。


## Examples

### Example #1 
&lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; を &lt;code&gt;datetimezone&lt;/code&gt; 値に変換します。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
