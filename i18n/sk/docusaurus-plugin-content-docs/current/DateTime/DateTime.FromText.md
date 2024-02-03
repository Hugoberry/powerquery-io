---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Vytvorí hodnotu datetimezone z miestneho a svetového formátu dátumu a času.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Vytvorí z textového vyjadrenia <code>text</code> hodnotu <code>datetime</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>.<code>Record</code> môže obsahovať tieto polia:<ul> <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu s použitím maximálneho úsilia.</li>   <li><code>Culture</code> : Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, zatiaľ čo v <code>"ru-RU"</code> <code>"MMM"</code> je <code>"янв", "фев", "мар", ...</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môže byť textová hodnota <code>options</code>. Je to rovnaké správanie, ako keby <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na hodnotu dátumu a času.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertujte hodnotu &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; na hodnotu dátumu a času.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertujte hodnotu &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na hodnotu dátumu a času.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertujte hodnotu &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; na hodnotu dátumu a času.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
