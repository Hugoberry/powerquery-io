---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


## Description

Vytvorí hodnotu datetimezone z lokálnych, univerzálnych a vlastných formátov datetimezone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Details

Vytvorí z textového vyjadrenia <code>text</code> hodnotu <code>datetimezone</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>.<code>Record</code> môže obsahovať tieto polia:<ul> <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu s použitím maximálneho úsilia.</li>   <li><code>Culture</code> : Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, zatiaľ čo v <code>"ru-RU"</code> <code>"MMM"</code> je <code>"янв", "фев", "мар", ...</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môže byť textová hodnota <code>options</code>. Je to rovnaké správanie, ako keby <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; na hodnotu &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konvertujte pomocou normy ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
