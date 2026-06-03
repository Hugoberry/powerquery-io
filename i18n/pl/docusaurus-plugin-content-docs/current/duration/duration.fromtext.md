---
title: Duration.FromText
---

# Duration.FromText


Zwraca wartość typu duration z tekstowej formy zapisu czasu, który upłynął (d.g:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Zwraca wartość czasu trwania z określonego tekstu `text`. Ta funkcja umożliwia analizowanie następujących formatów:

-   gg:mm(:ss(.uu))
-   (-)ddd(.gg:mm(:ss(.uu)))

(Wszystkie zakresy są włączone)

-   ddd: Liczba dni.
-   gg: Liczba godzin (od 0 do 23).
-   mm: Liczba minut (od 0 do 59).
-   ss: Liczba sekund (od 0 do 59).
-   uu: Ułamek sekund (od 0 do 9999999).


## Examples

### Example #1
Przekonwertuj wartość `"2.05:55:20"` na wartość typu `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
