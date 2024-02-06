---
title: Date.ToText
---

# Date.ToText


Returns a textual representation of the date value.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returns a textual representation of <code>date</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. <code>culture</code> is only used for legacy workflows. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in formatting the date using the default defined by <code>Culture</code>.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"MMM"</code> is <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"янв", "фев", "мар", ...</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> and <code>culture</code> may also be text values. This has the same behavior as if <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; into a &lt;code&gt;text&lt;/code&gt; value. &lt;i&gt;Result output may vary depending on current culture.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Convert using a custom format and the German culture.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Find the year in the Hijri calendar that corresponds to January 1st, 2000 in the Gregorian calendar.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
