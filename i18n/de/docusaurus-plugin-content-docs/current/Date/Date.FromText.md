---
title: Date.FromText
---

# Date.FromText


Erstellt ein Datum aus lokalen, universellen und benutzerdefinierten Datumsformaten.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Erstellt einen <code>date</code>-Wert aus einer Textdarstellung, <code>text</code>. Ein optionaler <code>record</code>-Parameter (<code>options</code>) kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105 für Details. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum nach bestem Wissen geparst.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, definiert <code>Culture</code> einige Formatspezifikationen. Zum Beispiel, ist in <code>"en-US"</code> <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code>, während in <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder weggelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows kann <code>options</code> auch ein Textwert sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertiertieren Sie &lt;code&gt;“2010-12-31“&lt;/code&gt; in einen &lt;code&gt;date&lt;/code&gt;-Wert.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Ermittelt Sie das Datum im gregorianischen Kalender, das dem Anfang des Jahres 1400 im Hijri-Kalender entspricht.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
