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

Erstellt einen `time`\-Wert aus einer Textdarstellung, `text`. Ein optionaler `record`\-Parameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. `record` kann die folgenden Felder enthalten:

-   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird die Uhrzeit nach bestem Aufwand analysiert.
-   `Culture`: Wenn `Format` nicht null ist, bestimmt `Culture` manche Formatbezeichner. Zum Beispiel, ist in `"en-US"` `"tt"` `"AM" oder "PM"`, während in `"ar-EG"` `"tt"` `"ص" oder "م"` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wird, wird `Culture.Current` verwendet.

Zur Unterstützung von Legacyworkflows kann `options` auch ein Textwert sein. Dies hat dasselbe Verhalten wie `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertiert `"10:12:31am"` in einen time-Wert.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"` in einen Zeitwert konvertieren.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"` in einen Zeitwert konvertieren.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
