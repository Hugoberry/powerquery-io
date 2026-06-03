---
title: Date.ToText
---

# Date.ToText


Zwraca tekstową reprezentację wartości daty.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Zwraca tekstową reprezentację właściwości `date`. Można podać opcjonalny parametr `record`, `options`, aby określić dodatkowe właściwości. `culture` jest używany tylko w starszych przepływach pracy. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje sformatowanie daty przy użyciu wartości domyślnej zdefiniowanej przez parametr `Culture`.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w `„en-US”` `„MMM”` to `„Jan”, „Feb”, „Mar”, ...`, podczas gdy `„ru-RU”` `„MMM”` to `„янв”, „фев”, „мар”, ...`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, parametry `options` i `culture` mogą być również wartościami tekstowymi. Ma to takie samo zachowanie, jak w przypadku `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Przekonwertuj wartość `#date(2010, 12, 31)` na wartość `„text”`. *Wynik może się różnić w zależności od aktualnej kultury.*
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
