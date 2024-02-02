---
title: Duration.ToText
---

# Duration.ToText


## Description

Returns the text of the form &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Returns a textual representation in the form "day.hour:mins:sec" of the given duration value, <code>duration</code>. <ul>        <li><code>duration</code>: A <code>duration</code> from which the textual representation is calculated.</li>  <li><code>format</code>: <i>[Optional]</i> Deprecated, will throw an error if not null</li>      </ul>


## Examples

### Example #1 
Convert &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; into a text value.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
