---
title: Time.From
---

# Time.From


## Description

Időértéket hoz létre a megadott értékből.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Egy <code>time</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).Ha a megadott <code>value</code> <code>null</code>, a <code>Time.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> érték <code>time</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>time</code> értékre:      <ul>        <li><code>text</code>: Egy <code>time</code> érték szöveges alakból. További részletek: <code>Time.FromText</code>.</li>        <li><code>datetime</code>: A <code>value</code> idő összetevője.</li>        <li><code>datetimezone</code>: A <code>value</code> helyi datetime megfelelőjének idő összetevője.</li>        <li><code>number</code>: A <code>value</code> által kifejezett töredéknapok számának megfelelő <code>time</code> érték. Ha a <code>value</code> negatív, illetve nagyobb vagy egyenlő 1-gyel, a függvény hibát ad vissza.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;0.7575&lt;/code&gt; érték konvertálása &lt;code&gt;time&lt;/code&gt; értékre
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
A &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; érték konvertálása &lt;code&gt;time&lt;/code&gt; értékre
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
