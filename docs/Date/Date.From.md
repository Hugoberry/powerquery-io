---
title: Date.From
---

# Date.From


Creates a date from the given value.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Returns a <code>date</code> value from the given <code>value</code>. An optional <code>culture</code> may also be provided (for example, "en-US").If the given <code>value</code> is <code>null</code>, <code>Date.From</code> returns <code>null</code>. If the given <code>value</code> is <code>date</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>date</code> value:      <ul>        <li><code>text</code>: A <code>date</code> value from textual representation. Refer to <code>Date.FromText</code> for details.</li>        <li><code>datetime</code>: The date component of the <code>value</code>.</li>        <li><code>datetimezone</code>: The date component of the local datetime equivalent of <code>value</code>.</li>        <li><code>number</code>: The date component of the datetime equivalent of the OLE Automation Date expressed by <code>value</code>.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;43910&lt;/code&gt; to a &lt;code&gt;date&lt;/code&gt; value.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Convert &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; to  a &lt;code&gt;date&lt;/code&gt; value.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
