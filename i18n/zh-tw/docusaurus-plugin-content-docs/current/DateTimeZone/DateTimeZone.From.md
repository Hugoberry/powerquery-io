---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

根據指定的值建立 datetimezone。


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

從指定的 <code>value</code> 傳回 <code>datetimezone</code> 值。也可能會提供選用的 <code>culture</code> (例如 "en-US")。若指定的 <code>value</code> 是 <code>null</code>，則 <code>DateTimeZone.From</code> 會傳回 <code>null</code>。若指定的 <code>value</code> 是 <code>datetimezone</code>，則會傳回 <code>value</code>。可以將下列類型的值轉換成 <code>datetimezone</code> 值:      <ul>        <li><code>text</code>: 以文字表示的 <code>datetimezone</code> 值。如需詳細資料，請參閱 <code>DateTimeZone.FromText</code>。</li>        <li><code>date</code>: <code>datetimezone</code> 以 <code>value</code> 為日期元件，以 <code>12:00:00 AM</code> 為時間元件而且時區差距對應到本地時區。</li>        <li><code>datetime</code>: <code>datetimezone</code> 以 <code>value</code> 為日期時間，而且時區差距對應到本地時區。</li>        <li><code>time</code>: <code>datetimezone</code> 以 <code>0</code> 的 OLE Automation 日期對等日期為日期元件，以 <code>value</code> 為時間元件，而且時區差距對應到本地時區。</li>        <li><code>number</code>: <code>datetimezone</code> 包含 <code>value</code> 所表示的 OLE Automation 日期對等日期，而且時區差距對應到本地時區。</li>      </ul>若 <code>value</code> 是其他任何類型，則會傳回錯誤。


## Examples

### Example #1 
將 &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; 轉換成 &lt;code&gt;datetimezone&lt;/code&gt; 值。
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
