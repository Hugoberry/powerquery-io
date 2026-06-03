---
title: Value.FromText
---

# Value.FromText


Tworzy silnie typizowaną wartość na podstawie reprezentacji tekstowej.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Dekoduje wartość z reprezentacji tekstowej i interpretuje ją jako wartość o odpowiednim typie.

-   `text`: tekst do zinterpretowania.
-   `culture`: (Opcjonalnie) Określona kultura używana do interpretowania tekstu (na przykład „en-US”).

Ta funkcja przyjmuje wartość tekstową i zwraca wartość typu `liczbowego`, `logiczną`, `null`, `data/godzina`, `czas trwania` lub `tekstu`. Pusta wartość tekstowa jest interpretowana jako wartość `null`.


## Examples

### Example #1
Przekonwertuj tekst reprezentujący liczbę na odpowiadającą jej wartość liczbową.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Przekonwertuj tekst reprezentujący procent na odpowiadającą mu wartość liczbową.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Przekonwertuj tekst reprezentujący wartość euro we Francji na odpowiadającą jej wartość liczbową.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Przekonwertuj tekst reprezentujący datę i godzinę w Niemczech na odpowiadającą jej wartość daty i godziny.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
