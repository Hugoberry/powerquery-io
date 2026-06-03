---
title: Json.FromValue
---

# Json.FromValue


Tworzy reprezentację danej wartości w notacji JSON.


## Syntax

```powerquery
Json.FromValue(
    value as any,
    optional encoding as TextEncoding.Type
) as binary
```


## Remarks

Tworzy reprezentację JSON danej wartości `value` przy użyciu kodowania tekstu określonego przez element `encoding`. W przypadku pominięcia elementu `encoding` jest używany standard UTF8. Wartości są reprezentowane w następujący sposób:

-   Wartości null oraz wartości tekstowe i logiczne są reprezentowane jako odpowiadające im typy JSON.
-   Liczby są reprezentowane jako liczby w notacji JSON z wyjątkiem elementów `#infinity`, `-#infinity` i `#nan`, które są konwertowane na wartości null.
-   Listy są reprezentowane jako tablice JSON.
-   Rekordy są reprezentowane jako obiekty JSON
-   Tabele są reprezentowane jako tablica obiektów.
-   Daty, godziny, wartości typu data/godzina, strefy czasowe i wartości czasu trwania są reprezentowane jako tekst ISO-8601
-   Wartości binarne są reprezentowane jako tekst kodowany w formacie base-64.
-   Typy i funkcje powodują błąd.


## Examples

### Example #1
Przekonwertuj wartość złożoną na notację JSON.
```powerquery
Text.FromBinary(Json.FromValue([A = {1, true, "3"}, B = #date(2012, 3, 25)]))
```

Result: 
```powerquery
"{""A"":[1,true,""3""],""B"":""2012-03-25""}"
```




## Category
Text.Conversions from and to text
