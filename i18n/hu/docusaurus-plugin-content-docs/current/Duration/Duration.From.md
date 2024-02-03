---
title: Duration.From
---

# Duration.From


## Description

Létrehoz egy időtartamot a megadott értékből.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Egy <code>duration</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Duration.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> érték <code>duration</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>duration</code> értékre:      <ul>        <li><code>text</code>: Egy <code>duration</code> érték az eltelt idő szöveges alakjaiból (n.ó:p:s). További részletek: <code>Duration.FromText</code>.</li>        <li><code>number</code>: A(z) <code>value</code> által kifejezett egész és töredéknapok számának megfelelő <code>duration</code> érték.</li>      </ul>Ha a(z) <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;2.525&lt;/code&gt; érték konvertálása &lt;code&gt;duration&lt;/code&gt; értékre
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
