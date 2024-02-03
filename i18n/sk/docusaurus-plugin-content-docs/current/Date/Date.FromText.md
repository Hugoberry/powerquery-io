---
title: Date.FromText
---

# Date.FromText


## Description

Vytvorí dátum z lokálneho, univerzálneho a vlastného formátu dátumu.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Vytvorí z textového vyjadrenia <code>text</code> hodnotu <code>date</code>. K zadaniu ďalších vlastností možno zadať voliteľný parameter <code>record</code> <code>options</code>.<code>Record</code> môže obsahovať tieto polia:<ul> <li><code>Format</code>: hodnota <code>text</code> označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty <code>null</code> bude mať za následok formátovanie dátumu s použitím maximálneho úsilia.</li>   <li><code>Culture</code> : Ak <code>Format</code> nemá hodnotu null, <code>Culture</code> ovláda niektoré špecifikátory formátu. Napríklad v <code>"en-US"</code> <code>"MMM"</code> je <code>"Jan", "Feb", "Mar", ...</code>, zatiaľ čo v <code>"ru-RU"</code> <code>"MMM"</code> je <code>"янв", "фев", "мар", ...</code>. Keď je <code>Format</code> hodnota <code>null</code>, <code>Culture</code> ovláda predvolený formát, ktorý sa má použiť. Keď má <code>Culture</code>hodnotu <code>null</code> alebo sa vynechá, použije sa <code>Culture.Current</code>.</li></ul>Na podporu starších pracovných postupov môže byť textová hodnota <code>options</code>. Je to rovnaké správanie, ako keby <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertujte hodnotu&lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; na hodnotu &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Nájdite dátum v gregoriánskom kalendári, ktorý zodpovedá začiatku roku 1400 v kalendári Hedžra.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
