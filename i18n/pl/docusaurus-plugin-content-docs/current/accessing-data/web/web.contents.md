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

Zwraca zawartość pobraną z <code>url</code> jako dane binarne. Można podać opcjonalny parametr rekordu, <code>options</code>, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola: <ul><li><code>Query</code> : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.</li><li><code>ApiKeyName</code> : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, kt&#243;ry musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.</li><li><code>Headers</code> : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagł&#243;wk&#243;w do żądania HTTP.</li><li><code>Timeout</code> : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagł&#243;wk&#243;w HTTP z obliczenia na potrzeby buforowania danych.</li><li><code>IsRetry</code> : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, kt&#243;ra może istnieć w pamięci podręcznej podczas pobierania danych.</li><li><code>ManualStatusHandling</code> : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, kt&#243;rych odpowiedź zawiera jeden z tych kod&#243;w stanu.</li><li><code>RelativePath</code> : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.</li><li><code>Content</code> : Określenie tej wartości spowoduje zmianę żądania internetowego z GET na POST, a wartość opcji stanie się zawartością żądania POST.</li></ul> Żądanie HTTP jest wykonywane jako żądanie GET (jeśli nie określono zawartości) lub POST (jeśli istnieje zawartość). Żądania POST mogą być wykonywane tylko anonimowo. <br /> Nagłówki odpowiedzi HTTP są dostępne jako metadane w wyniku binarnym. Poza niestandardowym kontekstem łącznika danych dostępny jest tylko podzbiór nagłówków odpowiedzi (ze względów bezpieczeństwa).    


## Examples

### Example #1 
Pobierz zawartość &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; przy użyciu opcji RelativePath i zapytania. Te opcje służą do dynamicznej kwerendy statycznego podstawowego adresu URL.
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
Połącz się z bezpiecznym adresem URL, który akceptuje klucz uwierzytelniania jako część ciągu zapytania. Zamiast twardego kodowania klucza tajnego w M (co stanowiłoby zagrożenie bezpieczeństwa),     klucz można bezpiecznie zapewnić, określając jego nazwę (nie jego wartość) w M, wybierając uwierzytelnianie internetowego interfejsu API i wprowadzając wartość klucza jako część poświadczenia internetowego interfejsu API.    W przypadku użycia w ten sposób poniższy przykład wygeneruje żądanie do &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
