---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Creates a datetimezone from local and universal datetime formats.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Creates a <code>datetime</code> value from a textual representation, <code>text</code>. An optional <code>record</code> parameter, <code>options</code>, may be provided to specify additional properties. The <code>record</code> can contain the following fields:<ul>   <li><code>Format</code>: A <code>text</code> value indicating the format to use. For more details, go to https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. Omitting this field or providing <code>null</code> will result in parsing the date using a best effort.</li>   <li><code>Culture</code>: When <code>Format</code> is not null, <code>Culture</code> controls some format specifiers. For example, in <code>"en-US"</code> <code>"MMM"</code> is <code>"Jan", "Feb", "Mar", ...</code>, while in <code>"ru-RU"</code> <code>"MMM"</code> is <code>"янв", "фев", "мар", ...</code>. When <code>Format</code> is <code>null</code>, <code>Culture</code> controls the default format to use. When <code>Culture</code> is <code>null</code> or omitted, <code>Culture.Current</code> is used.</li></ul>To support legacy workflows, <code>options</code> may also be a text value. This has the same behavior as if <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convert &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; into a datetime value.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Convert &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; into a datetime value.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Convert &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; into a datetime value.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Convert &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; into a datetime value.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
