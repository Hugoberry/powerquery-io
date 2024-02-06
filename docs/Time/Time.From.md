---
title: Time.From
---

# Time.From


Creates a time from the given value.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

Returns a <code>time</code> value from the given <code>value</code>. An optional <code>culture</code> may also be provided (for example, "en-US").If the given <code>value</code> is <code>null</code>, <code>Time.From</code> returns <code>null</code>. If the given <code>value</code> is <code>time</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>time</code> value:      <ul>        <li><code>text</code>: A <code>time</code> value from textual representation. Refer to <code>Time.FromText</code> for details.</li>        <li><code>datetime</code>: The time component of the <code>value</code>.</li>        <li><code>datetimezone</code>: The time component of the local datetime equivalent of <code>value</code>.</li>        <li><code>number</code>: A <code>time</code> equivalent to the number of fractional days expressed by <code>value</code>. If <code>value</code> is negative or greater or equal to 1, an error is returned.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;0.7575&lt;/code&gt; to a &lt;code&gt;time&lt;/code&gt; value.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Convert &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; to a &lt;code&gt;time&lt;/code&gt; value.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
