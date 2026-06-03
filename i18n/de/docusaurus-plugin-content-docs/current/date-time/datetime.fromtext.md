---
title: DateTime.FromText
---

# DateTime.FromText


Erstellt einen datetimezone-Wert auf der Grundlage lokaler und universeller datetime-Formate.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Erstellt einen `datetime`\-Wert aus einer Textdarstellung, `text`. Ein optionaler `record`\-Parameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. `record` kann die folgenden Felder enthalten:

-   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird das Datum nach bestem Aufwand analysiert.
-   `Culture`: Wenn `Format` nicht null ist, bestimmt `Culture` manche Formatbezeichner. Zum Beispiel ist `„MMM“` in `„en-US“` `„Jan“, „Feb“, „Mar“, …`, während `„MMM“` in `„ru-RU“` `„янв“, „фев“, „мар“, …` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wird, wird `Culture.Current` verwendet.

Zur Unterstützung von Legacyworkflows kann `options` auch ein Textwert sein. Dies hat dasselbe Verhalten wie `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertieren Sie `"2010-12-31T01:30:00"` in einen datetime-Wert.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertieren Sie `"2010-12-31T01:30:00.121212"` in einen datetime-Wert.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertieren Sie `"2010-12-31T01:30:00"` in einen datetime-Wert.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertieren Sie `"20101231T013000"` in einen datetime-Wert.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
