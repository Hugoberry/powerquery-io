---
title: Duration.ToText
---

# Duration.ToText


## Description

Vrátí textovou reprezentaci formátu d.h:m:s.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Vrátí textovou reprezentaci ve formě „day.hour:mins:sec“ dané hodnoty doby trvání, <code>duration</code>. <ul>        <li><code>duration</code>: <code>Doba trvání</code>, ze které je textová reprezentace počítána. </li>  <li><code>format</code>: <i>[Volitelné]</i> Už není podporováno – pokud není null, vyvolá chybu</li>      </ul>


## Examples

### Example #1 
Převede řetězec &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; na textovou hodnotu.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
