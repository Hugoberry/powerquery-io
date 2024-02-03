---
title: Time.FromText
---

# Time.FromText


## Description

Vytvorí čas z lokálnych a univerzálnych a vlastných formátov času.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Vytvorí z textového vyjadrenia <code>text</code> hodnotu <code>time</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>.<code>Record</code> môže obsahovať tieto polia:<ul> <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie času s použitím maximálneho úsilia.</li>   <li><code>Culture</code> : Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"tt"</code> je <code>"AM" alebo "PM"</code>, zatiaľ čo v <code>"ar-EG"</code> <code>"tt"</code> je <code>"ص" alebo "م"</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môže byť textová hodnota <code>options</code>. Je to rovnaké správanie, ako keby <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; na hodnotu času.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Konvertujte hodnotu &lt;code&gt;&#34;1012&#34;&lt;/code&gt; na hodnotu času.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Konvertujte hodnotu &lt;code&gt;&#34;10&#34;&lt;/code&gt; na hodnotu času.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
