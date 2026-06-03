---
title: Time.ToText
---

# Time.ToText


Gibt eine Textdarstellung des time-Werts zurück.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Gibt eine Textdarstellung von `time` zurück. Ein optionaler `record`\-Parameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. `culture` wird nur für Legacyworkflows verwendet. `record` kann die folgenden Felder enthalten:

-   `Format`: Ein `text`\-Wert, der das zu verwendende Format angibt. Weitere Details finden Sie unter https://go.microsoft.com/fwlink/?linkid=2180104 und https://go.microsoft.com/fwlink/?linkid=2180105. Wenn Sie dieses Feld auslassen oder `null` angeben, wird das Datum mit dem durch `Culture` definierten Standard formatiert.
-   `Culture`: Wenn `Format` nicht null ist, bestimmt `Culture` manche Formatbezeichner. Zum Beispiel, ist in `"en-US"` `"tt"` `"AM" oder "PM"`, während in `"ar-EG"` `"tt"` `"ص" oder "م"` ist. Wenn `Format` `null` ist, regelt `Culture` das zu verwendende Standardformat. Wenn `Culture` `null` ist oder ausgelassen wird, wird `Culture.Current` verwendet.

Zur Unterstützung von Legacyworkflows können `options` und `culture` auch Textwerte sein. Dies hat dasselbe Verhalten wie `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertieren Sie `#time(01, 30, 25)` in einen `text`\-Wert. *Das ausgegebene Ergebnis variiert in Abhängigkeit der aktuell ausgewählten Kultur.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Führen Sie eine Konvertierung unter Verwendung eines benutzerdefinierten Formats und der Kultur „Deutsch“ durch.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Führen Sie eine Konvertierung unter Verwendung des Standardzeitformats durch.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
