---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Returns a textual representation of the datetime value.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Returns a textual representation of <code>dateTime</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. <code>culture</code> is only used for legacy workflows. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in formatting the date using the default defined by <code>Culture</code>.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"MMM"</code> is <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"янв", "фев", "мар", ...</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> and <code>culture</code> may also be text values. This has the same behavior as if <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; into a &lt;code&gt;text&lt;/code&gt; value. &lt;i&gt;Result output may vary depending on current culture.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Convert using a custom format and the German culture.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Convert using the ISO 8601 pattern.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
