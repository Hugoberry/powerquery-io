---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Tworzy wartość „datetimezone” na podstawie lokalnych, uniwersalnych i niestandardowych formatów wartości „datetimezone”.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Tworzy wartość typu <code>datetimezone</code> z tekstowej reprezentacji, <code>text</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. Parametr <code>rekordu</code> może zawierać następujące pola:<ul>  <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje analizę daty przy użyciu optymalnego rozwiązania.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„MMM”</code> ma wartości <code>„Jan”, „Feb”, „Mar”, ...</code>, natomiast w przypadku parametru <code>„ru-RU”</code>format<code>„MMM”</code> ma wartości <code>„янв”, „фев”, „мар”, ...</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code>.  Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;&#34;2010-12-31T01:30:00-08:00&#34;&lt;/code&gt; na wartość typu &lt;code&gt;datetimezone&lt;/code&gt;.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2 
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3 
Konwertuj przy użyciu formatu daty ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
