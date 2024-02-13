---
title: Time.ToText
---

# Time.ToText


Returns a textual representation of the time value.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Returns a textual representation of <code>time</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. <code>culture</code> is only used for legacy workflows. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in formatting the date using the default defined by <code>Culture</code>.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"tt"</code> is <code>"AM" or "PM"</code>, while in <code>"ar-EG"</code> <code>"tt"</code> is <code>"ص" or "م"</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> and <code>culture</code> may also be text values. This has the same behavior as if <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; into a &lt;code&gt;text&lt;/code&gt; value. &lt;i&gt;Result output may vary depending on current culture.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Convert using a custom format and the German culture.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Convert using standard time format.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
