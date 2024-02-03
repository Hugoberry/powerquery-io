---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Vráti textové vyjadrenie hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Vráti textové vyjadrenie <code>dateTimeZone</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>. <code>culture</code> sa používa iba pre staršie pracovné postupy. <code>Record</code> môže obsahovať nasledujúce polia:<ul>   <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou <code>Culture</code>.</li>    <li><code>Culture</code>: Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, zatiaľ čo v <code>"ru-RU"</code> <code>"MMM"</code> je <code>"янв", "фев", "мар", ...</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môžu byť textové hodnoty aj <code>options</code> a <code>culture</code>. Je to rovnaké správanie, ako keby <code>options</code><code>= [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; na hodnotu &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Konvertujte pomocou vzoru ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
