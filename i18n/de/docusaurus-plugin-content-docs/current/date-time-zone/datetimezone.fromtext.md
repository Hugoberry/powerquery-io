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

Erstellt einen `datetimezone`\-Wert aus einer Textdarstellung, `text`. Ein optionaler `record`\-Parameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. `record` kann die folgenden Felder enthalten:

-   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird das Datum nach bestem Aufwand analysiert.
-   `Culture`: Wenn `Format` nicht null ist, bestimmt `Culture` manche Formatbezeichner. Zum Beispiel ist `„MMM“` in `„en-US“` `„Jan“, „Feb“, „Mar“, …`, während `„MMM“` in `„ru-RU“` `„янв“, „фев“, „мар“, …` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wird, wird `Culture.Current` verwendet.

Zur Unterstützung von Legacyworkflows kann `options` auch ein Textwert sein. Dies hat dasselbe Verhalten wie `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertieren Sie `"2010-12-31T01:30:00-08:00"` in einen `datetimezone`\-Wert.
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
