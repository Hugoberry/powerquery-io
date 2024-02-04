---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Erstellt einen datetimezone-Wert auf der Grundlage lokaler und universeller datetime-Formate.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Erstellt einen <code>datetime</code>-Wert aus einer Textdarstellung, <code>text</code>. Ein optionaler <code>record</code>-Parameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum nach bestem Wissen geparst.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, bestimmt <code>Culture</code> einige Formatspezifikationen. Zum Beispiel, ist in <code>"en-US"</code> <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code>, während in <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder weggelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows kann <code>options</code> auch ein Textwert sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertieren Sie &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; in einen datetime-Wert.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Konvertieren Sie &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; in einen datetime-Wert.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Konvertieren Sie &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; in einen datetime-Wert.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Konvertieren Sie &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; in einen datetime-Wert.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
