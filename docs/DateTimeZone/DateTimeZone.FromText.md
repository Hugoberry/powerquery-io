---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Creates a datetimezone from local, universal, and custom datetimezone formats.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Creates a <code>datetimezone</code> value from a textual representation, <code>text</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in parsing the date using a best effort.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"MMM"</code> is <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"янв", "фев", "мар", ...</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> may also be a text value. This has the same behavior as if <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; into a &lt;code&gt;datetimezone&lt;/code&gt; value.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Convert using a custom format and the German culture.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Convert using ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
