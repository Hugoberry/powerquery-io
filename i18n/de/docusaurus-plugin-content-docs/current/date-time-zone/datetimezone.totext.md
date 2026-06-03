---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Gibt eine Textdarstellung des datetimezone-Werts zurück.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Gibt eine Textdarstellung von `dateTimeZone` zurück. Ein optionaler `record`\-Parameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. `culture` wird nur für Legacyworkflows verwendet. `record` kann die folgenden Felder enthalten:

-   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird das Datum mit dem durch `Culture` definierten Standard formatiert.
-   `Culture`: Wenn `Format` nicht null ist, bestimmt `Culture` manche Formatbezeichner. Zum Beispiel ist `„MMM“` in `„en-US“` `„Jan“, „Feb“, „Mar“, …`, während `„MMM“` in `„ru-RU“` `„янв“, „фев“, „мар“, …` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wird, wird `Culture.Current` verwendet.

Zur Unterstützung von Legacyworkflows können `options` und `culture` auch Textwerte sein. Dies hat dasselbe Verhalten wie `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertieren Sie `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` in einen `text`\-Wert. *Das ausgegebene Ergebnis variiert in Abhängigkeit der aktuell ausgewählten Kultur.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Führen Sie eine Konvertierung gemäß dem ISO 8601-Muster durch.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
