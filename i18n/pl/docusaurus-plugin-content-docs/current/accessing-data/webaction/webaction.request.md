---
title: WebAction.Request
---

# WebAction.Request


Tworzy akcję, która po wykonaniu zwróci wyniki wykonania żądania HTTP w postaci wartości binarnej.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Tworzy akcję, która po wykonaniu zwróci wyniki wykonania żądania `method` względem `url` przy użyciu protokołu HTTP jako wartości binarnej. Można podać opcjonalny parametr rekordu, `options`, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola:

-   `Query` : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.
-   `ApiKeyName` : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, który musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.
-   `Headers` : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagłówków do żądania HTTP.
-   `Timeout` : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.
-   `ExcludedFromCacheKey` : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagłówków HTTP z obliczenia na potrzeby buforowania danych.
-   `IsRetry` : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, która może istnieć w pamięci podręcznej podczas pobierania danych.
-   `ManualStatusHandling` : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, których odpowiedź zawiera jeden z tych kodów stanu.
-   `RelativePath` : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.
-   `Content` : Określenie tej wartości spowoduje, że jej zawartość stanie się treścią żądania HTTP.

Pamiętaj, że ta funkcja jest wyłączona w większości kontekstów. Zamiast tego rozważ użycie elementu Web.Contents lub Web.Headers.


## Examples

### Example #1
Wykonaj żądanie GET względem usługi Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
