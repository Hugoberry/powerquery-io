---
title: Duration.ToText
---

# Duration.ToText


## Description

Vráti text vo formáte d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Vráti textové vyjadrenie vo formáte day.hour:mins:sec danej hodnoty trvania, <code>duration</code>. <ul>        <li><code>duration</code>: <code>duration</code>, na základe ktorého sa vypočíta textové vyjadrenie.</li>  <li><code>format</code>: <i>[Voliteľné]</i> Zastarané, vráti chybu, ak hodnota nie je null</li>      </ul>


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na textovú hodnotu.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
