---
title: DateTimeZone.From
---

# DateTimeZone.From


## Description

Létrehoz egy datetimezone értéket a megadott értékből.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Details

Egy <code>datetimezone</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).Ha a megadott <code>value</code> <code>null</code> értékű, a <code>DateTimeZone.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> <code>datetimezone</code> értékű, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>datetimezone</code> értékre:      <ul>        <li><code>text</code>: Egy <code>datetimezone</code> érték szöveges alakból. További részletek: <code>DateTimeZone.FromText</code>.</li>        <li><code>date</code>: Egy <code>datetimezone</code> érték, ahol a dátum összetevő <code>value</code>, az idő összetevő és a helyi időzónának megfelelő eltolás pedig <code>12:00:00 AM</code>.</li>        <li><code>datetime</code>: Egy <code>datetimezone</code> érték, ahol a datetime összetevő és a helyi időzónának megfelelő eltolás <code>value</code>.</li>        <li><code>time</code>: Egy <code>datetimezone</code> érték, ahol a dátum összetevő a <code>0</code> OLE-automatizálási dátum megfelelője, az idő összetevő és a helyi időzónának megfelelő eltolás pedig <code>value</code>.</li>        <li><code>number</code>: Egy <code>datetimezone</code> érték, ahol a datetime összetevő és a helyi időzónának megfelelő eltolás a <code>value</code> által kifejezett OLE-automatizálási dátum megfelelője.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;&#34;2020-10-30T01:30:00-08:00&#34;&lt;/code&gt; érték konvertálása &lt;code&gt;datetimezone&lt;/code&gt; értékre
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```




## Category
DateTimeZone
