---
title: Time.ToText
---

# Time.ToText


## Description

Gibt eine Textdarstellung des time-Werts zurück.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Gibt eine Textdarstellung von <code>time</code> zurück. Ein optionaler <code>record</code>-Parameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>culture</code> wird nur für Legacyworkflows verwendet. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum mit dem durch <code>Culture</code> definierten Standard formatiert.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, bestimmt <code>Culture</code> manche Formatbezeichner. Zum Beispiel, ist in <code>"en-US"</code> <code>"tt"</code>  <code>"AM" oder "PM"</code>, whärend in <code>"ar-EG"</code> <code>"tt"</code> <code>"ص" oder "م"</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder ausgelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows können <code>options</code> und <code>culture</code> auch Textwerte sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertieren Sie &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; in einen &lt;code&gt;text&lt;/code&gt;-Wert. &lt;i&gt;Das ausgegebene Ergebnis variiert in Abhängigkeit der aktuell ausgewählten Kultur.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Führen Sie eine Konvertierung unter Verwendung des Standardzeitformats durch.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
