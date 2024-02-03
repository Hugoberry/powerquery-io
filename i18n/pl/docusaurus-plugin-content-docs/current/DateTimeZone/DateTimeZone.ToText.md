---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


## Description

Zwraca tekstową reprezentację wartości typu datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Details

Zwraca tekstową reprezentację właściwości <code>dateTimeZone</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. <code>culture</code> stosuje się tylko w starszych przepływach pracy (zobacz poniżej). Parametr <code>rekordu</code> może zawierać następujące pola:<ul>   <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr <code>Culture</code>.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„MMM”</code> ma wartości <code>„Jan”, „Feb”, „Mar”, ...</code>, natomiast w przypadku parametru <code>„ru-RU”</code>format<code>„MMM”</code> ma wartości <code>„янв”, „фев”, „мар”, ...</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code> i <code>culture</code>. Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = <code>options</code>, Culture= <code>culture</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)&lt;/code&gt; na wartość &lt;code&gt;„text”&lt;/code&gt;. &lt;i&gt;Wynik może się różnić w zależności od aktualnej kultury.&lt;/i&gt;
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2 
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3 
Konwertuj przy użyciu wzorca ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
