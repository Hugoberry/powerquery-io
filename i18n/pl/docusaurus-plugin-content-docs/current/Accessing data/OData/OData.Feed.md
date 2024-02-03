---
title: OData.Feed
---

# OData.Feed


## Description

Zwraca tabelę źródeł strumieniowych OData oferowanych przez usługę OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Zwraca tabelę kanałów informacyjnych OData oferowanych przez usługę protokołu OData z identyfikatora URI <code>serviceUri</code>, nagłówków <code>headers</code>. Wartość logiczna określająca, czy mają być używane połączenia współbieżne lub czy można określić opcjonalny parametr rekordu, <code>options</code>, w celu kontrolowania następujących opcji:    <ul>    <li><code>Query</code>: dodaje programowo parametry zapytania do adresu URL bez obawy o znaki ucieczki. </li>    <li> <code>Headers</code>: określenie tej wartości jako rekordu spowoduje dołączenie dodatkowych nagłówków do żądania HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: określenie tej wartości jako listy spowoduje wykluczenie tych kluczy nagłówka HTTP z obliczeń na potrzeby buforowania danych.</li>    <li> <code>ApiKeyName</code>: jeśli witryna docelowa ma notację klucza interfejsu API, za pomocą tego parametru można określić nazwę (ale nie wartość) parametru klucza, który musi zostać użyty w adresie URL. Rzeczywista wartość klucza jest podawana w poświadczeniu.</li>    <li> <code>Timeout</code>: określenie tej wartości jako czasu trwania spowoduje zmianę limitu czasu żądania HTTP. Wartością domyślną jest 600 sekund.</li>    <li> <code>EnableBatch</code>: wartość logiczna (true/false), która ustawia, czy zezwolić na generowanie żądania $batch protokołu OData w przypadku przekroczenia wartości MaxUriLength (wartość domyślna to false).</li>    <li> <code>MaxUriLength</code>: liczba określająca maksymalną długość dozwolonego identyfikatora URI wysyłanego do usługi protokołu OData. Jeśli ta wartość zostanie przekroczona i właściwość EnableBatch będzie mieć wartość true, wtedy żądanie zostanie wykonane w punkcie końcowego $batch protokołu OData. W przeciwnym razie zakończy się to niepowodzeniem (wartością domyślną jest 2048).</li>    <li> <code>Concurrent</code>: wartość logiczna (true/false). W przypadku ustawienia na wartość true żądania będą wysyłane do usługi współbieżnie. W przypadku ustawienia na wartość false żądania będą wysyłane sekwencyjnie. Jeśli wartość nie zostanie określona, wartość ta zostanie wyznaczona przez adnotację AsynchronousRequestsSupported usługi. Jeśli usługa nie określa, czy adnotacja AsynchronousRequestsSupported jest obsługiwana, żądania będą wykonywane sekwencyjnie.</li>    <li> <code>ODataVersion</code>: liczba (3 lub 4) określająca wersję protokołu OData do użycia w przypadku tej usługi protokołu OData. Jeśli nie jest określona, żądane będą wszystkie obsługiwane wersje. Wersja usługi zostanie określona przez nagłówek OData-Version zwrócony przez usługę.</li>    <li> <code>FunctionOverloads</code>: wartość logiczna (true/false). W przypadku ustawienia na wartość true, przeciążenia importu funkcji będą wyświetlane w nawigatorze jako osobne jednostki. W przypadku ustawienia na wartość false, przeciążenia importu funkcji będą wyświetlane jako jedna funkcja związku w nawigatorze. Wartość domyślna dla V3: false. Wartość domyślna dla V4: true.</li>    <li> <code>MoreColumns</code>: wartość logiczna (true/false), która w przypadku ustawienia na wartości true, spowoduje dodanie kolumny „Więcej kolumn” do każdego kanału informacyjnego jednostki zawierającego typy otwarte i polimorficzne. Będzie ona zawierać pola, które nie zostały zadeklarowane w typie podstawowym. W przypadku ustawienia na wartość false to pole nie będzie występować. Wartość domyślna to false.</li>    <li> <code>IncludeAnnotations</code>: rozdzielana przecinkami lista kwalifikowanych nazw terminów lub wzorców dla przestrzeni nazw do uwzględnienia ze znakiem „\*” jako symbolem wieloznacznym. Domyślnie nie są uwzględniane żadne adnotacje.</li>    <li> <code>IncludeMetadataAnnotations</code>: rozdzielana przecinkami lista kwalifikowanych nazw terminów lub wzorców dla przestrzeni nazw do uwzględnienia w żądaniach dokumentów metadanych ze znakiem -„\*” jako symbolem wieloznacznym. Domyślnie uwzględniane są te same adnotacje co w przypadku opcji IncludeAnnotations.</li>    <li> <code>OmitValues</code>: zezwala usłudze protokołu OData na unikanie zapisywania określonych wartości w odpowiedziach. W przypadku potwierdzenia wartości te zostaną wywnioskowane z pominiętych pól. Dostępne opcje:      <ul>        <li><code>ODataOmitValues.Nulls</code>: zezwala usłudze protokołu OData na pomijanie wartości null.</li>    </ul>    </li>    <li> <code>Implementation</code>: określa implementację łącznika protokołu OData do użycia. Prawidłowe wartości to „2.0” i null.</li>    </ul>


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
