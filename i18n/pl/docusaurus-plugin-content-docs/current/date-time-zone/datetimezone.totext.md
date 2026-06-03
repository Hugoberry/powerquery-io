---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Zwraca tekstową reprezentację wartości typu datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację właściwości `dateTimeZone`. Można podać opcjonalny parametr `record`, `options`, aby określić dodatkowe właściwości. `culture` jest używany tylko w starszych przepływach pracy. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr `Culture`.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w `„en-US”` `„MMM”` to `„Jan”, „Feb”, „Mar”, ...`, podczas gdy `„ru-RU”` `„MMM”` to `„янв”, „фев”, „мар”, ...`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, parametry `options` i `culture` mogą być również wartościami tekstowymi. Ma to takie samo zachowanie, jak w przypadku `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Przekonwertuj wartość `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` na wartość `„text”`. *Wynik może się różnić w zależności od aktualnej kultury.*
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
