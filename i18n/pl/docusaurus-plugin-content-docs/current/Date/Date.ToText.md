---
title: Date.ToText
---

# Date.ToText


## Description

Zwraca tekstową reprezentację wartości daty.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Details

Zwraca tekstową reprezentację właściwości <code>date</code>. Aby określić dodatkowe właściwości można podać opcjonalny parametr <code>rekordu</code>, <code>options</code>. <code>culture</code> stosuje się tylko w starszych przepływach pracy (zobacz poniżej). Parametr <code>rekordu</code> może zawierać następujące pola:<ul>   <li><code>Format</code>: wartość <code>tekstowa</code> wskazująca format, który ma być użyty. Aby uzyskać więcej szczegółów, przejdź do strony https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości <code>null</code> spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr <code>Culture</code>.</li>   <li><code>Culture</code>: gdy parametr <code>Format</code> nie ma wartości null, parametr <code>Culture</code> kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru <code> „en-US”</code> format <code>„MMM”</code> ma wartości <code>„Jan”, „Feb”, „Mar”, ...</code>, natomiast w przypadku parametru <code>„ru-RU”</code>format<code>„MMM”</code> ma wartości <code>„янв”, „фев”, „мар”, ...</code>. Gdy parametr <code>Format</code> ma wartość <code>null</code>, parametr <code>Culture</code> kontroluje domyślny format, który ma być użyty. Gdy parametr <code>Culture</code> ma wartość <code>null</code> lub jest pominięty, zostanie użyta funkcja <code>Culture.Current</code>.</li></ul>Aby obsługiwać starsze przepływy pracy, wartościami tekstowymi mogą być również <code>options</code> i <code>culture</code>. Zachowanie jest takie same jak w przypadku <code>options</code><code> = [Format = <code>options</code>, Culture= <code>culture</code>]</code>.


## Examples

### Example #1 
Przekonwertuj wartość &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; na wartość &lt;code&gt;„text”&lt;/code&gt;. &lt;i&gt;Wynik może się różnić w zależności od aktualnej kultury.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Znajdź rok w kalendarzu Hidżry, który odpowiada dacie 1 stycznia 2000 r. w kalendarzu gregoriańskim.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
