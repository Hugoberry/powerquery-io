---
title: DateTime.FromText
---

# DateTime.FromText


## Description

Tworzy wartość typu datetimezone na podstawie lokalnych i uniwersalnych formatów daty/godziny.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Details

Tworzy wartość typu <code>datetime</code> z tekstowej reprezentacji, <code>text</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. Parametr <code>rekordu</code> może zawierać następujące pola:<ul>  <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje analizę daty przy użyciu optymalnego rozwiązania.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„MMM”</code> ma wartości <code>„Jan”, „Feb”, „Mar”, ...</code>, natomiast w przypadku parametru <code>„ru-RU”</code>format<code>„MMM”</code> ma wartości <code>„янв”, „фев”, „мар”, ...</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code>.  Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na wartość typu „datetime”.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2 
Przekonwertuj wartość &lt;code&gt;&#34;2010-12-31T01:30:00.121212&#34;&lt;/code&gt; na wartość typu „datetime”.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3 
Przekonwertuj wartość &lt;code&gt;&#34;2010-12-31T01:30:00&#34;&lt;/code&gt; na wartość typu „datetime”.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4 
Przekonwertuj wartość &lt;code&gt;&#34;20101231T013000&#34;&lt;/code&gt; na wartość typu „datetime”.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
