---
title: DateTime.ToText
---

# DateTime.ToText


## Description

Gibt eine Textdarstellung des datetime-Werts zurück.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Details

Gibt eine Textdarstellung von <code>dateTime</code> zurück. Ein optionaler <code>record</code>-Parameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>culture</code> wird nur für Legacyworkflows verwendet. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum mit dem durch <code>Culture</code> definierten Standard formatiert.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, bestimmt <code>Culture</code> manche Formatbezeichner. Zum Beispiel, ist in <code>"en-US"</code> <code>"MMM"</code>  <code>"Jan", "Feb", "Mar", ...</code>, whärend in <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder ausgelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows können <code>options</code> und <code>culture</code> auch Textwerte sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Konvertieren Sie &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25)&lt;/code&gt; in einen &lt;code&gt;text&lt;/code&gt;-Wert. &lt;i&gt;Das ausgegebene Ergebnis variiert in Abhängigkeit der aktuell ausgewählten Kultur.&lt;/i&gt;
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2 
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3 
Führen Sie eine Konvertierung gemäß dem ISO 8601-Muster durch.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
