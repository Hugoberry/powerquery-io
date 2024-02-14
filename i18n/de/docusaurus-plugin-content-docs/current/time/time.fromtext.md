---
title: Time.FromText
---

# Time.FromText


Erstellt einen Zeitwert auf der Grundlage lokaler, universeller und benutzerdefinierter Zeitformate.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Erstellt einen <code>time</code>-Wert aus einer Textdarstellung, <code>text</code>. Ein optionaler <code>record</code>-Parameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Gehen Sie zu https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105 für Details. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum nach bestem Wissen geparst.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, definiert <code>Culture</code> einige Formatspezifikationen. Zum Beispiel ist in <code>"en-US"</code> <code>"tt"</code> <code>"AM" oder "PM"</code>, währen in <code>"ar-EG"</code> <code>"tt"</code> <code>"ص" oder "م"</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder weggelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows kann <code>options</code> auch ein Textwert sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertiert &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; in einen time-Wert.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
&lt;code&gt;&#34;1012&#34;&lt;/code&gt; in einen Zeitwert konvertieren.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
&lt;code&gt;&#34;10&#34;&lt;/code&gt; in einen Zeitwert konvertieren.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
