---
title: Duration.ToText
---

# Duration.ToText


## Description

Pateikiamas formos „d.h:m:s“ tekstas.


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Details

Pateikiama nurodytos trukmės tekstinė day.hour:mins:sec formos pateiktis <code>duration</code>. <ul>        <li><code>duration</code>: <code>trukmė</code>, kurios tekstinė pateiktis apskaičiuojama.</li>  <li><code>format</code>: <i>[pasirenkama]</i> nerekomenduojama, jei reikšmė yra ne Null, bus parodyta klaida</li>      </ul>


## Examples

### Example #1 
Konvertuokite &lt;code&gt;#duration(2, 5, 55, 20)&lt;/code&gt; į teksto reikšmę.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
