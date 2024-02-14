---
title: Binary.InferContentType
---

# Binary.InferContentType


Odczytuje strumień danych binarnych i próbuje określić typ zawartości oraz informacje o formacie dla strumienia.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Zwraca rekord z polem Content.Type, które zawiera wywnioskowany typ MIME.    Jeśli wywnioskowany typ zawartości to tekst/\* i wykryta zostanie strona kodowa kodowania, to dodatkowo zwraca pole Content.Encoding z kodowaniem strumienia.    Jeśli wywnioskowany typ zawartości to text/csv i format jest rozdzielany, dodatkowo zwraca pole Csv.PotentialDelimiter z tabelą do analizowania potencjalnych ograniczników.    Jeśli wywnioskowany typ zawartości to text/csv i format ma stałą szerokość, dodatkowo zwraca pole Csv.PotentialPositions z listą do analizowania potencjalnych pozycji kolumn o stałej szerokości.



## Category
Binary
