---
title: DateTimeZone.From
---

# DateTimeZone.From


从给定的值创建 datetimezone。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

从给定的 <code>value</code> 返回 <code>datetimezone</code> 值。还可提供可选的 <code>culture</code> (例如 “en-US”)。如果给定的 <code>value</code> 是 <code>null</code>，则 <code>DateTimeZone.From</code> 将返回 <code>null</code>。如果给定的 <code>value</code> 是 <code>datetimezone</code>，则返回 <code>value</code>。以下类型的值可以转换为 <code>datetimezone</code> 值:      <ul>        <li><code>text</code>: 文本表示形式的 <code>datetimezone</code> 值。有关详细信息，请参阅 <code>DateTimeZone.FromText</code>。</li>        <li><code>date</code>: 一个以 <code>value</code> 为日期组件，<code>午夜 12:00:00</code> 为时间组件的 <code>datetimezone</code>，其偏移量与本地时区相对应。</li>        <li><code>datetime</code>: 一个以 <code>value</code> 作为日期时间的 <code>datetimezone</code>，其偏移量与本地时区相对应。</li>        <li><code>time</code>: 一个 <code>datetimezone</code>，它具有作为日期组件的 <code>0</code> 的 OLE 自动化日期的等效日期、作为时间组件的 <code>value</code> 以及与本地时区相对应的偏移量。</li>        <li><code>number</code>: 一个 <code>datetimezone</code>，它具有由 <code>value</code> 表示的 OLE 自动化日期的等效日期时间以及与本地时区相对应的偏移量。</li>      </ul>如果 <code>value</code> 属于任何其他类型，则返回错误。


## Examples

### Example #1 
将 &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; 转换为 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
