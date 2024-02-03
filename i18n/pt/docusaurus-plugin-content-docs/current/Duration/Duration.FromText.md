---
title: Duration.FromText
---

# Duration.FromText


## Description

Returns a duration value from textual elapsed time forms (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Details

Returns a duration value from the specified text, <code>text</code>. The following formats can be parsed by this function: <ul>        <li>(-)hh:mm(:ss(.ff)) </li>        <li>(-)ddd(.hh:mm(:ss(.ff))) </li> </ul>        <br />        (All ranges are inclusive)<br />        ddd: Number of days.<br />        hh: Number of hours, between 0 and 23.<br />        mm: Number of minutes, between 0 and 59.<br />        ss: Number of seconds, between 0 and 59.<br />        ff: Fraction of seconds, between 0 and 9999999.


## Examples

### Example #1 
Convert &lt;code&gt;&#34;2.05:55:20&#34;&lt;/code&gt; into a &lt;code&gt;duration&lt;/code&gt; value.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
