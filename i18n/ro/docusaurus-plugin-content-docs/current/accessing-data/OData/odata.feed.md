---
title: OData.Feed
---

# OData.Feed


Returnează un tabel de fluxuri OData oferite de un serviciu OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Returnează un tabel de fluxuri OData oferite de un serviciu OData dintr-un URI `serviceUri`, anteturi `headers`. O valoare booleană care specifică dacă se utilizează conexiuni concurente sau un parametru opțional de înregistrare, `options`, poate fi specificată pentru a seta următoarele opțiuni:

-   `Query`: adăugați în mod programatic parametri de interogare la adresa URL fără a vă face griji cu privire la escaping.
-   `Headers`: specificarea acestei valori ca înregistrare va furniza anteturi suplimentare unei solicitări HTTP.
-   `ExcludedFromCacheKey`: specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru memorarea în cache a datelor.
-   `ApiKeyName`: dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea reală a cheii este furnizată în acreditare.
-   `Timeout`: specificarea acestei valori ca durată va modifica timpul de expirare pentru o solicitare HTTP. Valoarea implicită este 600 de secunde.
-   `EnableBatch`: o valoare logică (true/false) care setează dacă se permite generarea unei solicitări OData $batch, dacă valoarea MaxUriLength este depășită (valoarea implicită este false).
-   `MaxUriLength`: un număr care indică lungimea maximă a unui URI permis trimis la un serviciu OData. Dacă valoarea este depășită și EnableBatch are valoarea true, solicitarea va fi făcută către un punct final OData $batch, altfel nu va reuși (valoarea implicită este 2048).
-   `Concurrent`: o valoare logică (true/false) care, atunci când este setată la valoarea true, determină efectuarea simultană a soli,citărilor către serviciu. Când este setată la valoarea false, solicitările vor fi efectuate secvențial. Când nu este specificată, valoarea va fi determinată de adnotarea AsynchronousRequestsSupported a serviciului. Dacă serviciul nu specifică dacă AsynchronousRequestsSupported este acceptat, solicitările se vor face secvențial.
-   `ODataVersion`: un număr (3 sau 4) care specifică versiunea de protocol OData de utilizat pentru acest serviciu OData. Când nu se specifică, se vor solicita toate versiunile acceptate. Versiunea serviciului va fi determinată de antetul OData-Version returnat de service.
-   `FunctionOverloads`: o valoare logică (true/false) când este setată la valoarea true, supraîncărcările importului de funcții vor fi listate în navigator ca intrări separate; dacă este setată la valoarea false, supraîncărcările importului de funcții vor fi listate ca o singură funcție de uniune în navigator. Valoare implicită pentru V3 este false. Valoare implicită pentru V4 este true.
-   `MoreColumns`: o valoare logică (true/false) care, atunci când este setată la true, adaugă o coloană „Mai multe coloane” la fiecare flux de entitate care conține tipuri deschise și tipuri polimorfe. Aceasta va conține câmpurile nedeclarate în tipul de bază. Când are valoarea false, acest câmp nu este prezent. Valoarea implicită este false.
-   `IncludeAnnotations`: o listă separată prin virgule de modele sau nume de termeni calificați pentru spațiul de nume de inclus cu „\*” drept caractere wildcard. În mod implicit, niciuna dintre adnotări nu este inclusă.
-   `IncludeMetadataAnnotations`: o listă separată prin virgule de nume sau modele de termeni calificați pentru spațiul de nume de inclus în solicitările de documente de metadate, cu „\*” drept caractere wildcard. În mod implicit, include aceleași adnotări ca IncludeAnnotations.
-   `OmitValues`: permite serviciului OData să evite scrierea anumitor valori în răspunsuri. Dacă este recunoscută de serviciu, vom deduce aceste valori din câmpurile omise. Opțiunile includ:
    -   `ODataOmitValues.Nulls`: permite serviciului OData să omită valori nule.
-   `Implementation`: specifică implementarea conectorului OData de utilizat. Valorile valide sunt „2.0” sau nul.


## Examples

### Example #1
Conectează la serviciul OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
