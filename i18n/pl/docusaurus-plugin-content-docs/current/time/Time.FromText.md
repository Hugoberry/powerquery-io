---
title: Time.FromText
---

# Time.FromText


Tworzy wartość „time” na podstawie lokalnych, uniwersalnych i niestandardowych formatów wartości „time”.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Tworzy wartość typu <code>time</code> z tekstowej reprezentacji, <code>text</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. Parametr <code>rekordu</code> może zawierać następujące pola:<ul>  <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje analizę daty przy użyciu optymalnego rozwiązania.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„tt”</code> ma wartości <code>„AM” lub „PM”</code>, natomiast w przypadku parametru <code>„ar-EG”</code>format<code>„tt”</code> ma wartości <code>„ص” lub „م”</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code>.  Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; na wartość godziny.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Przekonwertuj wartość &lt;code&gt;&#34;1012&#34;&lt;/code&gt; na wartość typu Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Przekonwertuj wartość &lt;code&gt;&#34;10&#34;&lt;/code&gt; na wartość typu Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
