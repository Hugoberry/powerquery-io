---
title: Web.Headers
---

# Web.Headers


Zwraca nagłówki HTTP pobrane z adresu URL jako wartość rekordu.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Zwraca nagłówki pobrane z `url` jako rekord. Można podać opcjonalny parametr rekordu, `options`, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `Query` : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.
-   `ApiKeyName` : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, który musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.
-   `Headers` : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagłówków do żądania HTTP.
-   `Timeout` : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.
-   `ExcludedFromCacheKey` : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagłówków HTTP z obliczenia na potrzeby buforowania danych.
-   `IsRetry` : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, która może istnieć w pamięci podręcznej podczas pobierania danych.
-   `ManualStatusHandling` : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, których odpowiedź zawiera jeden z tych kodów stanu.
-   `RelativePath` : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.

Żądanie HTTP jest wykonywane za pomocą metody HEAD. Poza niestandardowym kontekstem łącznika danych dostępny jest tylko podzbiór nagłówków odpowiedzi (ze względów bezpieczeństwa).


## Examples

### Example #1
Pobierz nagłówki HTTP dla `"https://bing.com/search?q=Power+Query"` przy użyciu opcji RelativePath i Query.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
