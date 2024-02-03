---
title: WebAction.Request
---

# WebAction.Request


## Description

Tworzy akcję, która po wykonaniu zwróci wyniki wykonania żądania HTTP w postaci wartości binarnej.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Tworzy akcję, która po wykonaniu zwróci wyniki wykonania żądania <code>method</code> względem <code>url</code> przy użyciu protokołu HTTP jako wartości binarnej. Można podać opcjonalny parametr rekordu, <code>options</code>, aby określić dodatkowe właściwości. Rekord może zawierać następujące pola: <ul><li><code>Query</code> : Programowo dodawaj parametry zapytania do adresu URL bez konieczności zajmowania się sekwencjami ucieczki.</li><li><code>ApiKeyName</code> : Jeśli w witrynie docelowej jest używany klucz interfejsu API, za pomocą tego parametru można określić nazwę (nie wartość) parametru klucza, kt&#243;ry musi być używany w adresie URL. Rzeczywista wartość klucza jest udostępniana w poświadczeniu.</li><li><code>Headers</code> : Podanie rekordu w przypadku tej wartości spowoduje dostarczenie dodatkowych nagł&#243;wk&#243;w do żądania HTTP.</li><li><code>Timeout</code> : Podanie czasu trwania w przypadku tej wartości spowoduje zmianę limitu czasu żądania HTTP. Wartość domyślna to 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Podanie listy w przypadku tej wartości spowoduje wykluczenie tych kluczy nagł&#243;wk&#243;w HTTP z obliczenia na potrzeby buforowania danych.</li><li><code>IsRetry</code> : Podanie wartości true w przypadku tej wartości logicznej spowoduje zignorowanie odpowiedzi, kt&#243;ra może istnieć w pamięci podręcznej podczas pobierania danych.</li><li><code>ManualStatusHandling</code> : Podanie listy w przypadku tej wartości uniemożliwi wszelką wbudowaną obsługę żądań HTTP, kt&#243;rych odpowiedź zawiera jeden z tych kod&#243;w stanu.</li><li><code>RelativePath</code> : Podanie tekstu w przypadku tej wartości spowoduje dodanie go do podstawowego adresu URL przed wysłaniem żądania.</li><li><code>Content</code> : Określenie tej wartości spowoduje, że jej zawartość stanie się treścią żądania HTTP.</li></ul> <br /> Pamiętaj, że ta funkcja jest wyłączona w większości kontekstów. Zamiast tego rozważ użycie elementu Web.Contents lub Web.Headers.    


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
