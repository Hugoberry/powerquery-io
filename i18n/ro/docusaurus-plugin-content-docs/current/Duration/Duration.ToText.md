---
title: Duration.ToText
---

# Duration.ToText


## Description

Returnează text în forma „d.h:m:s”.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Returnează o reprezentare textuală în forma „day.hour:mins:sec” a valorii durată date, <code>duration</code>. <ul>        <li><code>duration</code>: o <code>durată</code> din care se calculează reprezentarea textuală.</li>  <li><code>format</code>: <i>[Opțional]</i> Depreciat, va returna eroare dacă nu este nul</li>      </ul>


## Examples

### Example #1 
Convertiţi &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; într-o valoare text.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
