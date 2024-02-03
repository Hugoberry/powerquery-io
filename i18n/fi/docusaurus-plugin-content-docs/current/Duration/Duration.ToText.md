---
title: Duration.ToText
---

# Duration.ToText


## Description

Palauttaa tekstin muodossa &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Palauttaa tekstiesityksen annetusta kestoarvosta <code>duration</code> muodossa päivä.tunti:minuutti:sekunti. <ul>        <li><code>duration</code>: <code>kesto</code>, josta tekstiesitys lasketaan. </li>  <li><code>format</code>: <i>(valinnainen)</i> vanhentunut ja aiheuttaa virheen, jos ei ole tyhjäarvo</li>      </ul>


## Examples

### Example #1 
Muunna &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; tekstiarvoksi.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
