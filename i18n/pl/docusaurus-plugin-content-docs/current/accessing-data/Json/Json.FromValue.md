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

Tworzy reprezentację JSON danej wartości <code>value</code> przy użyciu kodowania tekstu określonego przez element <code>encoding</code>. W przypadku pominięcia elementu <code>encoding</code> jest używany standard UTF8. Wartości są reprezentowane w następujący sposób:<br /> <ul>        <li>Wartości null oraz wartości tekstowe i logiczne są reprezentowane jako odpowiadające im typy JSON.</li>        <li>Liczby są reprezentowane jako liczby w notacji JSON z wyjątkiem elementów <code>#infinity</code>, <code>-#infinity</code> i <code>#nan</code>, które są konwertowane na wartości null.</li>        <li>Listy są reprezentowane jako tablice JSON.</li>        <li>Rekordy są reprezentowane jako obiekty JSON.</li>        <li>Tabele są reprezentowane jako tablica obiektów.</li>        <li>Daty, godziny, wartości typu data/godzina, strefy czasowe i wartości czasu trwania są reprezentowane jako tekst ISO-8601.</li>        <li>Wartości binarne są reprezentowane jako tekst kodowany w formacie base-64.</li>        <li>Typy i funkcje powodują błąd.</li> </ul>    


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
