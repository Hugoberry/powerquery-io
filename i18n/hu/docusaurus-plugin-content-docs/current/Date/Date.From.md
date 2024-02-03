---
title: Date.From
---

# Date.From


## Description

Dátumot hoz létre a megadott értékből.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Egy <code>date</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).Ha a megadott <code>value</code> <code>null</code>, a <code>Date.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> <code>date</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>date</code> értékre:      <ul>        <li><code>text</code>: Egy <code>date</code> érték szöveges alakból. További részletek: <code>Date.FromText</code>.</li>        <li><code>datetime</code>: A  dátum összetevője.</li><code>value</code>
        <li><code>datetimezone</code>: A <code>value</code> helyi datetime megfelelőjének dátum összetevője.</li>        <li><code>number</code>: A <code>value</code> által kifejezett OLE-automatizálási dátum datetime megfelelőjének dátum összetevője.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;43910&lt;/code&gt; érték konvertálása &lt;code&gt;date&lt;/code&gt; értékre
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
A &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; érték konvertálása &lt;code&gt;date&lt;/code&gt; értékre
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
