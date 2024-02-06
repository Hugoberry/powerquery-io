---
title: DateTime.From
---

# DateTime.From


Creates a datetime from the given value.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

Returns a <code>datetime</code> value from the given <code>value</code>. An optional <code>culture</code> may also be provided (for example, "en-US").If the given <code>value</code> is <code>null</code>, <code>DateTime.From</code> returns <code>null</code>. If the given <code>value</code> is <code>datetime</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>datetime</code> value:      <ul>        <li><code>text</code>: A <code>datetime</code> value from textual representation. Refer to <code>DateTime.FromText</code> for details.</li>        <li><code>date</code>: A <code>datetime</code> with <code>value</code> as the date component and <code>12:00:00 AM</code> as the time component.</li>        <li><code>datetimezone</code>: The local <code>datetime</code> equivalent of <code>value</code>.</li>        <li><code>time</code>: A <code>datetime</code> with the date equivalent of the OLE Automation Date of <code>0</code> as the date component and <code>value</code> as the time component.</li>        <li><code>number</code>: A <code>datetime</code> equivalent of the OLE Automation Date expressed by <code>value</code>. </li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; to a &lt;code&gt;datetime&lt;/code&gt; value.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Convert &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; to a &lt;code&gt;datetime&lt;/code&gt; value.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
