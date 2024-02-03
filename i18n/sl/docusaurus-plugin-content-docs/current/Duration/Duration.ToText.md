---
title: Duration.ToText
---

# Duration.ToText


## Description

Vrne besedilo oblike &#34;d.h:m:s&#34;.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Vrne besedilno predstavitev v obliki "dan.ura:min:sek" iz navedene vrednosti trajanja <code>duration</code>. <ul>        <li><code>duration</code>: izračunana je parameter <code>duration</code> in besedilne predstavitve.</li>  <li><code>format</code>: <i>[Izbirno]</i> Ukinjeno, če ni nastavljena na nič, se prikaže sporočilo o napaki</li>      </ul>


## Examples

### Example #1 
Pretvorite &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; v besedilno vrednost.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
