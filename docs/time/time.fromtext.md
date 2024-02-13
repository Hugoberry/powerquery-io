---
title: Time.FromText
---

# Time.FromText


Creates a Time from local and universal, and custom Time formats.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Creates a <code>time</code> value from a textual representation, <code>text</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in parsing the time using a best effort.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"tt"</code> is <code>"AM" or "PM"</code>, while in <code>"ar-EG"</code> <code>"tt"</code> is <code>"ص" or "م"</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> may also be a text value. This has the same behavior as if <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; into a Time value.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Convert &lt;code&gt;&#34;1012&#34;&lt;/code&gt; into a Time value.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Convert &lt;code&gt;&#34;10&#34;&lt;/code&gt; into a Time value.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
