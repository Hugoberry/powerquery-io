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

Zwraca nagłówki pobrane z <code>url</code> jako rekord. Można podać opcjonalny parametr rekordu, <code>options</code>, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola: <ul><li><code>Query</code> : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.</li><li><code>ApiKeyName</code> : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, kt&#243;ry musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.</li><li><code>Headers</code> : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagł&#243;wk&#243;w do żądania HTTP.</li><li><code>Timeout</code> : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagł&#243;wk&#243;w HTTP z obliczenia na potrzeby buforowania danych.</li><li><code>IsRetry</code> : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, kt&#243;ra może istnieć w pamięci podręcznej podczas pobierania danych.</li><li><code>ManualStatusHandling</code> : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, kt&#243;rych odpowiedź zawiera jeden z tych kod&#243;w stanu.</li><li><code>RelativePath</code> : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.</li></ul> Żądanie HTTP jest wykonywane za pomocą metody HEAD. Poza niestandardowym kontekstem łącznika danych dostępny jest tylko podzbiór nagłówków odpowiedzi (ze względów bezpieczeństwa).    


## Examples

### Example #1 
Pobierz nagłówki HTTP dla &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; przy użyciu opcji RelativePath i Query.
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
