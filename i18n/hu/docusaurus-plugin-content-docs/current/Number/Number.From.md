---
title: Number.From
---

# Number.From


## Description

Számot hoz létre a megadott értékből.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Details

Egy <code>number</code> típusú értéket ad vissza a megadott <code>value</code> értékből. Egy nem kötelező <code>culture</code> is megadható (például, „en-US”).Ha a megadott <code>value</code> <code>null</code>, a <code>Number.From</code> függvény <code>null</code> értéket ad vissza. Ha a megadott <code>value</code> <code>number</code>, a visszaadott érték <code>value</code>. A következő típusú értékek konvertálhatók <code>number</code> értékre:      <ul>        <li><code>text</code>: Egy <code>number</code> érték szöveges alakból. Az általános szöveges formátumok („15”, „3423.10”, „5.0E-10”) használhatók. További részletek: <code>Number.FromText</code>.</li>        <li><code>logical</code>: 1 <code>true</code> esetén, 0 <code>false</code> esetén.</li>        <li><code>datetime</code>: Egy OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.</li>        <li><code>datetimezone</code>: A <code>value</code> helyi dátum és idő OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.</li>        <li><code>date</code>: Egy OLE-automatizálási dátum megfelelőjét tartalmazó kétszeres pontosságú lebegőpontos szám.</li>        <li><code>time</code>: Töredéknapokban kifejezve.</li>        <li><code>duration</code>: Egész és töredéknapokban kifejezve.</li>      </ul>Ha a <code>value</code> más típusú, a függvény hibát ad vissza.


## Examples

### Example #1 
A &lt;code&gt;&#34;4&#34;&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; típusú értékének lekérése
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2 
A &lt;code&gt;#datetime(2020, 3, 20, 6, 0, 0)&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; típusú értékének lekérése
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3 
Kérje le a &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt; &lt;code&gt;number&lt;/code&gt; értékét.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
