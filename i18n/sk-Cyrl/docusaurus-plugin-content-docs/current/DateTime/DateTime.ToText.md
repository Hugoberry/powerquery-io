---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Vráti textové vyjadrenie hodnoty dátumu a času.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vráti textové vyjadrenie <code>dateTime</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>. <code>culture</code> sa používa iba pre staršie pracovné postupy. <code>Record</code> môže obsahovať nasledujúce polia:<ul>   <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou <code>Culture</code>.</li>    <li><code>Culture</code>: Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, zatiaľ čo v <code>"ru-RU"</code> <code>"MMM"</code> je <code>"янв", "фев", "мар", ...</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môžu byť textové hodnoty aj <code>options</code> a <code>culture</code>. Je to rovnaké správanie, ako keby <code>options</code><code>= [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; na &lt;code&gt;text&lt;/code&gt; hodnotu. &lt;i&gt;Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Konvertujte pomocou vzoru ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
