---
title: OData.Feed
---

# OData.Feed


Zwraca tabelę źródeł strumieniowych OData oferowanych przez usługę OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Zwraca tabelę kanałów informacyjnych OData oferowanych przez usługę protokołu OData z identyfikatora URI `serviceUri`, nagłówków `headers`. Wartość logiczna określająca, czy mają być używane połączenia współbieżne lub czy można określić opcjonalny parametr rekordu `options` w celu kontrolowania następujących opcji:

-   `Query`: dodaje programowo parametry zapytania do adresu URL bez obawy o znaki ucieczki.
-   `Headers`: określenie tej wartości jako rekordu spowoduje dołączenie dodatkowych nagłówków do żądania HTTP.
-   `ExcludedFromCacheKey`: określenie tej wartości jako listy spowoduje wykluczenie tych kluczy nagłówka HTTP z obliczeń na potrzeby buforowania danych.
-   `ApiKeyName`: jeśli witryna docelowa ma notację klucza interfejsu API, za pomocą tego parametru można określić nazwę (ale nie wartość) parametru klucza, który musi zostać użyty w adresie URL. Rzeczywista wartość klucza jest podawana w poświadczeniach.
-   `Timeout`: określenie tej wartości jako czasu trwania spowoduje zmianę czasu trwania żądania HTTP. Wartością domyślną jest 600 sekund.
-   `EnableBatch`: wartość logiczna (true/false) określająca, czy zezwolić na generowanie żądania $batch protokołu OData w przypadku przekroczenia wartości MaxUriLength (wartość domyślna to false).
-   `MaxUriLength`: liczba określająca maksymalną długość dozwolonego identyfikatora URI wysyłanego do usługi protokołu OData. Jeśli ta wartość zostanie przekroczona i właściwość EnableBatch będzie mieć wartość true, żądanie zostanie wysłane do punktu końcowego $batch protokołu OData. W przeciwnym razie zakończy się to niepowodzeniem (wartością domyślną jest 2048).
-   `Concurrent`: wartość logiczna (true/false). W przypadku ustawienia na wartość true żądania będą wysyłane do usługi współbieżnie. W przypadku ustawienia na wartość false żądania będą wysyłane sekwencyjnie. Jeśli wartość nie zostanie podana, zostanie użyta wartość określona za pomocą adnotacji AsynchronousRequestsSupported usługi. Jeśli usługa nie określa, czy adnotacja AsynchronousRequestsSupported jest obsługiwana, żądania będą wysyłane sekwencyjnie.
-   `ODataVersion`: liczba (3 lub 4) określająca wersję protokołu OData do użycia w przypadku danej usługi protokołu OData. Jeśli nie jest określona, żądane będą wszystkie obsługiwane wersje. Wersja usługi zostanie określona na podstawie nagłówka OData-Version zwróconego przez usługę.
-   `FunctionOverloads`: wartość logiczna (true/false). W przypadku ustawienia na wartość true, przeciążenia importu funkcji będą wyświetlane w nawigatorze jako osobne jednostki. W przypadku ustawienia na wartość false, przeciążenia importu funkcji będą wyświetlane jako jedna funkcja związku w nawigatorze. Wartość domyślna dla V3: false. Wartość domyślna dla V4: true.
-   `MoreColumns`: wartość logiczna (true/false), która w przypadku ustawienia na wartości true, spowoduje dodanie kolumny „Więcej kolumn” do każdego kanału informacyjnego jednostki zawierającego typy otwarte i polimorficzne. Będzie ona zawierać pola, które nie zostały zadeklarowane w typie podstawowym. W przypadku ustawienia na wartość false to pole nie będzie występować. Wartość domyślna to false.
-   `IncludeAnnotations`: rozdzielana przecinkami lista kwalifikowanych nazw terminów lub wzorców dla przestrzeni nazw do uwzględnienia ze znakiem \*” jako symbolem wieloznacznym. Domyślnie nie są uwzględniane żadne adnotacje.
-   `IncludeMetadataAnnotations`: rozdzielana przecinkami lista kwalifikowanych nazw terminów lub wzorców dla przestrzeni nazw do uwzględnienia w żądaniach dokumentów metadanych ze znakiem \*” jako symbolem wieloznacznym. Domyślnie uwzględniane są te same adnotacje co w przypadku opcji IncludeAnnotations.
-   `OmitValues`: zezwala usłudze protokołu OData na unikanie zapisywania określonych wartości w odpowiedziach. W przypadku potwierdzenia wartości te zostaną wywnioskowane z pominiętych pól. Dostępne opcje:
    -   `ODataOmitValues.Nulls`: zezwala usłudze protokołu OData na pomijanie wartości null.
-   `Implementation`: określa implementację łącznika protokołu OData do użycia. Prawidłowe wartości to 2.0” i null.


## Examples

### Example #1
Połącz z usługą protokołu OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
