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

Zwraca tekstową reprezentację właściwości `time`. Można podać opcjonalny parametr `record`, `options`, aby określić dodatkowe właściwości. `culture` jest używany tylko w starszych przepływach pracy. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr `Culture`.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru `„en-US”` format `„tt”` ma wartości `„AM” lub „PM”`, natomiast w przypadku parametru `„ar-EG”`format`„tt”` ma wartości `„ص” lub „م”`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, parametry `options` i `culture` mogą być również wartościami tekstowymi. Ma to takie samo zachowanie, jak w przypadku `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Przekonwertuj wartość `#time(01, 30, 25)` na wartość `„text”`. *Wynik może się różnić w zależności od aktualnej kultury.*
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
