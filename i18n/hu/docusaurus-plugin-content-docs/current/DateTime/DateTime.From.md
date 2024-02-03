---
title: DateTime.From
---

# DateTime.From


## Description

Létrehoz egy datetime értéket a megadott értékből.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Egy <code>datetime</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).Ha a megadott <code>value</code> <code>null</code>, a <code>DateTime.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> <code>datetime</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>datetime</code> értékre:      <ul>        <li><code>text</code>: Egy <code>datetime</code> érték szöveges alakból. További részletek: <code>DateTime.FromText</code>.</li>        <li><code>date</code>: Egy <code>datetime</code> érték, ahol a dátum összetevő <code>value</code>, az idő összetevő pedig <code>12:00:00 AM</code>.</li>        <li><code>datetimezone</code>: A <code>value</code> helyi <code>datetime</code> megfelelője.</li>        <li><code>time</code>: Egy <code>datetime</code> érték, ahol a dátum összetevő a <code>0</code> OLE-automatizálási dátum megfelelője, az idő összetevő pedig <code>value</code>.</li>        <li><code>number</code>: A <code>value</code> által kifejezett OLE-automatizálási dátum <code>datetime</code> megfelelője.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; érték konvertálása &lt;code&gt;datetime&lt;/code&gt; értékre
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
A &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; érték konvertálása &lt;code&gt;datetime&lt;/code&gt; értékre
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
