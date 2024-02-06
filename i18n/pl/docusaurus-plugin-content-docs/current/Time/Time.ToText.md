---
title: Time.ToText
---

# Time.ToText


Zwraca tekstową reprezentację wartości czasu.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację właściwości <code>time</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. <code>culture</code> stosuje się tylko w starszych przepływach pracy (zobacz poniżej). Parametr <code>rekordu</code> może zawierać następujące pola:<ul>   <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr <code>Culture</code>.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„tt”</code> ma wartości <code>„AM” lub „PM”</code>, natomiast w przypadku parametru <code>„ar-EG”</code>format<code>„tt”</code> ma wartości <code>„ص” lub „م”</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code> i <code>culture</code>. Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = <code>options</code>, Culture= <code>culture</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#time(01, 30, 25)&lt;/code&gt; na wartość &lt;code&gt;„text”&lt;/code&gt;. &lt;i&gt;Wynik może się różnić w zależności od aktualnej kultury.&lt;/i&gt;
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2 
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3 
Konwertuj przy użyciu standardowego formatu czasu.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
