---
title: Time.ToText
---

# Time.ToText


## Description

Vráti textové vyjadrenie hodnoty času.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vráti textové vyjadrenie <code>time</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>. <code>culture</code> sa používa iba pre staršie pracovné postupy. <code>Record</code> môže obsahovať nasledujúce polia:<ul>   <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou <code>Culture</code>.</li>    <li><code>Culture</code>: Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"tt"</code> je <code>"AM" alebo "PM"</code>, zatiaľ čo v <code>"ar-EG"</code> <code>"tt"</code> je <code>"ص" alebo "م"</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môžu byť textové hodnoty aj <code>options</code> a <code>culture</code>. Je to rovnaké správanie, ako keby <code>options</code><code>= [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; na hodnotu &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konvertujte pomocou štandardného formátu času.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
