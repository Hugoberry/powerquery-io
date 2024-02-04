---
title: Date.ToText
---

# Date.ToText


## Description

Gibt eine Textdarstellung des Datumswerts zurück.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Gibt eine Textdarstellung von <code>date</code> zurück. Ein optionaler <code>record</code>-Parameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>culture</code> wird nur für Legacyworkflows verwendet. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum mit dem durch <code>Culture</code> definierten Standard formatiert.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, bestimmt <code>Culture</code> manche Formatbezeichner. Zum Beispiel, ist in <code>"en-US"</code> <code>"MMM"</code>  <code>"Jan", "Feb", "Mar", ...</code>, whärend in <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder ausgelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows können <code>options</code> und <code>culture</code> auch Textwerte sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertieren Sie &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; in einen &lt;code&gt;text&lt;/code&gt;-Wert. &lt;i&gt;Das ausgegebene Ergebnis variiert in Abhängigkeit der aktuell ausgewählten Kultur.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Ermittelt Sie das Datum im Hijri-Kalender, das dem 1. Januar 2000 im gregorianischen Kalender entspricht.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
