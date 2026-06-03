---
title: DateTime.FromText
---

# DateTime.FromText


Tworzy wartość typu datetimezone na podstawie lokalnych i uniwersalnych formatów daty/godziny.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Tworzy wartość `datetime` z tekstowej reprezentacji, `text`. Aby określić dodatkowe właściwości można podać opcjonalny parametr `record`, `options`. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje analizę daty przy użyciu optymalnego rozwiązania.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w `„en-US”` `„MMM”` to `„Jan”, „Feb”, „Mar”, ...`, podczas gdy `„ru-RU”` `„MMM”` to `„янв”, „фев”, „мар”, ...`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, `options` może być również wartością tekstową. Zachowuje się on tak samo, jak `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Przekonwertuj wartość `"2010-12-31T01:30:00"` na wartość typu „datetime”.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Przekonwertuj wartość `"2010-12-31T01:30:00.121212"` na wartość typu „datetime”.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Przekonwertuj wartość `"2010-12-31T01:30:00"` na wartość typu „datetime”.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Przekonwertuj wartość `"20101231T013000"` na wartość typu „datetime”.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
