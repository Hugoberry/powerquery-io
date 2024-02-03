---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Creates a datetimezone from the given value.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Returns a <code>datetimezone</code> value from the given <code>value</code>. An optional <code>culture</code> may also be provided (for example, "en-US").If the given <code>value</code> is <code>null</code>, <code>DateTimeZone.From</code> returns <code>null</code>. If the given <code>value</code> is <code>datetimezone</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>datetimezone</code> value:      <ul>        <li><code>text</code>: A <code>datetimezone</code> value from textual representation. Refer to <code>DateTimeZone.FromText</code> for details.</li>        <li><code>date</code>: A <code>datetimezone</code> with <code>value</code> as the date component, <code>12:00:00 AM</code> as the time component, and the offset corresponding the local time zone.</li>        <li><code>datetime</code>: A <code>datetimezone</code> with <code>value</code> as the datetime and the offset corresponding the local time zone.</li>        <li><code>time</code>: A <code>datetimezone</code> with the date equivalent of the OLE Automation Date of <code>0</code> as the date component, <code>value</code> as the time component, and the offset corresponding the local time zone.</li>        <li><code>number</code>: A <code>datetimezone</code> with the datetime equivalent of the OLE Automation Date expressed by <code>value</code> and the offset corresponding the local time zone.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; to a &lt;code&gt;datetimezone&lt;/code&gt; value.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
