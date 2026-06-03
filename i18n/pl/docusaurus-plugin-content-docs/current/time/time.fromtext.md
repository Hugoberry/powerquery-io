---
title: Time.FromText
---

# Time.FromText


Tworzy wartość „time” na podstawie lokalnych, uniwersalnych i niestandardowych formatów wartości „time”.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Tworzy wartość `time` z tekstowej reprezentacji, `text`. Aby określić dodatkowe właściwości można podać opcjonalny parametr `record`, `options`. Parametr `record` może zawierać następujące pola:

-   `Format`: wartość `text` wskazująca format do użycia. Aby uzyskać więcej szczegółów, przejdź do stron https://go.microsoft.com/fwlink/?linkid=2180104 i https://go.microsoft.com/fwlink/?linkid=2180105. Pominięcie tego pola lub podanie wartości `null` spowoduje analizę czasu przy użyciu najlepszego rozwiązania.
-   `Culture`: gdy parametr `Format` nie ma wartości null, parametr `Culture` kontroluje niektóre specyfikatory formatu. Na przykład w przypadku parametru `„en-US”` format `„tt”` ma wartości `„AM” lub „PM”`, natomiast w przypadku parametru `„ar-EG”`format`„tt”` ma wartości `„ص” lub „م”`. Gdy `Format` ma wartość `null`, parametr `Culture` kontroluje domyślny format do użycia. Gdy parametr `Culture` ma wartość `null` lub jest pominięty, zostanie użyty parametr `Culture.Current`.

Aby obsługiwać starsze przepływy pracy, `options` może być również wartością tekstową. Zachowuje się on tak samo, jak `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Przekonwertuj wartość `"10:12:31am"` na wartość godziny.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Przekonwertuj wartość `"1012"` na wartość typu Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Przekonwertuj wartość `"10"` na wartość typu Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
