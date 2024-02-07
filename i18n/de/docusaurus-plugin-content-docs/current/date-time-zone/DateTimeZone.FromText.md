---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Erstellt einen datetimezone-Wert aus lokalen, universellen und benutzerdefinierten datetimezone-Formaten.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Erstellt einen <code>datetimezone</code>-Wert aus einer Textdarstellung, <code>text</code>. Ein optionaler <code>record</code>-Parameter (<code>options</code>) kann angegeben werden, um zusätzliche Eigenschaften anzugeben. <code>record</code> kann die folgenden Felder enthalten:<ul>   <li><code>Format</code>: Ein <code>text</code>-Wert, der das zu verwendende Format angibt. Weitere Informationen erhalten Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder <code>null</code> angeben, wird das Datum nach bestem Wissen geparst.</li>   <li><code>Culture</code>: Wenn <code>Format</code> nicht null ist, definiert <code>Culture</code> einige Formatspezifikationen. Zum Beispiel, ist in <code>"en-US"</code> <code>"MMM"</code> <code>"Jan", "Feb", "Mar", ...</code>, während in <code>"ru-RU"</code> <code>"MMM"</code> <code>"янв", "фев", "мар", ...</code> ist. Wenn <code>Format</code> <code>null</code> ist, bestimmt <code>Culture</code> das zu verwendende Standardformat. Wenn <code>Culture</code> <code>null</code> ist oder weggelassen wird, wird <code>Culture.Current</code> verwendet.</li></ul>Zur Unterstützung von Legacyworkflows kann <code>options</code> auch ein Textwert sein. Dies führt zum gleichen Verhalten wie <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Konvertieren Sie &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; in einen &lt;code&gt;datetimezone&lt;/code&gt;-Wert.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Führen Sie eine Konvertierung gemäß ISO 8601 durch.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
