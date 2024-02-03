---
title: Duration.From
---

# Duration.From


## Description

Creates a duration from the given value.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Returns a <code>duration</code> value from the given <code>value</code>. If the given <code>value</code> is <code>null</code>, <code>Duration.From</code> returns <code>null</code>.  If the given <code>value</code> is <code>duration</code>, <code>value</code> is returned. Values of the following types can be converted to a <code>duration</code> value:      <ul>        <li><code>text</code>: A <code>duration</code> value from textual elapsed time forms (d.h:m:s). Refer to <code>Duration.FromText</code> for details.</li>        <li><code>number</code>: A <code>duration</code> equivalent to the number of whole and fractional days expressed by <code>value</code>.</li>      </ul>If <code>value</code> is of any other type, an error is returned.


## Examples

### Example #1 
Convert &lt;code&gt;2.525&lt;/code&gt; into a &lt;code&gt;duration&lt;/code&gt; value.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
