---
title: Web.Contents
---

# Web.Contents


Zwraca zawartość pobraną spod adresu URL jako wartość binarną.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Zwraca zawartość pobraną z `url` jako dane binarne. Można podać opcjonalny parametr rekordu, `options`, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `Query` : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.
-   `ApiKeyName` : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, który musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.
-   `Headers` : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagłówków do żądania HTTP.
-   `Timeout` : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.
-   `ExcludedFromCacheKey` : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagłówków HTTP z obliczenia na potrzeby buforowania danych.
-   `IsRetry` : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, która może istnieć w pamięci podręcznej podczas pobierania danych.
-   `ManualStatusHandling` : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, których odpowiedź zawiera jeden z tych kodów stanu.
-   `RelativePath` : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.
-   `Content` : Określenie tej wartości spowoduje zmianę żądania internetowego z GET na POST, a wartość opcji stanie się zawartością żądania POST.

Żądanie HTTP jest wykonywane jako żądanie GET (jeśli nie określono zawartości) lub POST (jeśli istnieje zawartość). Żądania POST mogą być wykonywane tylko anonimowo.  
  
Nagłówki odpowiedzi HTTP są dostępne jako metadane w wyniku binarnym. Poza niestandardowym kontekstem łącznika danych dostępny jest tylko podzbiór nagłówków odpowiedzi (ze względów bezpieczeństwa).


## Examples

### Example #1
Pobierz zawartość `"https://bing.com/search?q=Power+Query"` przy użyciu opcji RelativePath i zapytania. Te opcje służą do dynamicznej kwerendy statycznego podstawowego adresu URL.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Wykonaj operację POST względem adresu URL, przekazując binarny ładunek JSON i analizując odpowiedź jako kod JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Połącz się z bezpiecznym adresem URL, który akceptuje klucz uwierzytelniania jako część ciągu zapytania. Zamiast twardego kodowania klucza tajnego w M (co stanowiłoby zagrożenie bezpieczeństwa), klucz można bezpiecznie zapewnić, określając jego nazwę (nie jego wartość) w M, wybierając uwierzytelnianie internetowego interfejsu API i wprowadzając wartość klucza jako część poświadczenia internetowego interfejsu API. W przypadku użycia w ten sposób poniższy przykład wygeneruje żądanie do `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
