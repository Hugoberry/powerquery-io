---
title: Logical.From
---

# Logical.From


## Description

Létrehoz egy logikai értéket a megadott értékből.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Egy <code>logical</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Ha a megadott <code>value</code> <code>null</code>, a <code>Logical.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> érték <code>logical</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>logical</code> értékre:      <ul>        <li><code>text</code>: Egy <code>logical</code> érték a szöveges értékből, amely <code>"true"</code> vagy <code>"false"</code> lehet. További részletek: <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code>, ha a(z) <code>value</code> egyenlő <code>0</code>-val, egyéb esetben <code>true</code>.</li>      </ul>Ha a(z) <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;2&lt;/code&gt; érték konvertálása &lt;code&gt;logical&lt;/code&gt; értékre
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
