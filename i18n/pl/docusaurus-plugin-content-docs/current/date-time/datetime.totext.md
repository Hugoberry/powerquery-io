---
title: DateTime.ToText
---

# DateTime.ToText


Zwraca tekstową reprezentację wartości typu datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację właściwości `dateTime`. Można podać opcjonalny parametr `record`, `options`, aby określić dodatkowe właściwości. `culture` jest używany tylko w starszych przepływach pracy. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr `Culture`.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w `„en-US”` `„MMM”` to `„Jan”, „Feb”, „Mar”, ...`, podczas gdy `„ru-RU”` `„MMM”` to `„янв”, „фев”, „мар”, ...`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, parametry `options` i `culture` mogą być również wartościami tekstowymi. Ma to takie samo zachowanie, jak w przypadku `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Przekonwertuj wartość `#datetime(2010, 12, 31, 01, 30, 25)` na wartość `„text”`. *Wynik może się różnić w zależności od aktualnej kultury.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konwertuj przy użyciu formatu niestandardowego i z kulturą Polska — polski.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konwertuj przy użyciu wzorca ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
