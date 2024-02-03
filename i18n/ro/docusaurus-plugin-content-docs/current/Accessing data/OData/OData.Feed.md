---
title: OData.Feed
---

# OData.Feed


## Description

Returnează un tabel de fluxuri OData oferite de un serviciu OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Returnează un tabel de fluxuri OData oferite de un serviciu OData dintr-un URI <code>serviceUri</code>, anteturi <code>headers</code>. O valoare booleană care specifică dacă se utilizează conexiuni concurente sau un parametru opțional de înregistrare, <code>options</code>, poate fi specificată pentru a seta următoarele opțiuni:    <ul>    <li><code>Query</code>: Adăugați în mod programatic parametri de interogare la adresa URL fără a vă face griji cu privire la escaping. </li>    <li> <code>Headers</code> : Specificarea acestei valori ca înregistrare va furniza anteturi suplimentare unei solicitări HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru memorarea în cache a datelor.</li>    <li> <code>ApiKeyName</code> : dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea reală a cheii este furnizată în acreditare.</li>    <li> <code>Timeout</code> : Specificarea acestei valori ca durată va modifica timpul de expirare pentru o solicitare HTTP. Valoarea implicită este 600 de secunde.</li>    <li> <code>EnableBatch</code> : O valoare logică (true/false) care setează dacă se permite generarea unei solicitări OData $batch, dacă valoarea MaxUriLength este depășită (valoarea implicită este false).</li>    <li> <code>MaxUriLength</code> : Un număr care indică lungimea maximă a unui URI permis trimis la un serviciu OData. Dacă valoarea este depășită și EnableBatch are valoarea true, solicitarea va fi făcută către un punct final OData $batch, altfel nu va reuși (valoarea implicită este 2048).</li>    <li> <code>Concurrent</code> : O valoare logică (true/false) care, atunci când este setată la valoarea true, determină efectuarea simultană a soli,citărilor către serviciu. Când este setată la valoarea false, solicitările vor fi efectuate secvențial. Când nu este specificată, valoarea va fi determinată de adnotarea AsynchronousRequestsSupported a serviciului. Dacă serviciul nu specifică dacă AsynchronousRequestsSupported este acceptat, solicitările se vor face secvențial.</li>    <li> <code>ODataVersion</code> : Un număr (3 sau 4) care specifică versiunea de protocol OData de utilizat pentru acest serviciu OData. Când nu se specifică, se vor solicita toate versiunile acceptate. Versiunea serviciului va fi determinată de antetul OData-Version returnat de service.</li>    <li> <code>FunctionOverloads</code>: O valoare logică (true/false) când este setată la valoarea true, supraîncărcările importului de funcții vor fi listate în navigator ca intrări separate; dacă este setată la valoarea false, supraîncărcările importului de funcții vor fi listate ca o singură funcție de uniune în navigator. Valoare implicită pentru V3 este false. Valoare implicită pentru V4 este true.</li>    <li> <code>MoreColumns</code>: O valoare logică (true/false) care, atunci când este setată la true, adaugă o coloană „Mai multe coloane” la fiecare flux de entitate care conține tipuri deschise și tipuri polimorfe. Aceasta va conține câmpurile nedeclarate în tipul de bază. Când are valoarea false, acest câmp nu este prezent. Valoarea implicită este false.</li>    <li> <code>IncludeAnnotations</code> : O listă separată prin virgule de modele sau nume de termeni calificați pentru spațiul de nume de inclus cu „\*” drept caractere wildcard. În mod implicit, niciuna dintre adnotări nu este inclusă.</li>    <li> <code>IncludeMetadataAnnotations</code> : O listă separată prin virgule de nume sau modele de termeni calificați pentru spațiul de nume de inclus în solicitările de documente de metadate, cu „\*” drept caractere wildcard. În mod implicit, include aceleași adnotări ca IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Permite serviciului OData să evite scrierea anumitor valori în răspunsuri. Dacă este recunoscută de serviciu, vom deduce aceste valori din câmpurile omise. Opțiunile includ:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Permite serviciului OData să omită valori nule.</li>      </ul>    </li>    <li> <code>Implementation</code> : Specifică implementarea conectorului OData de utilizat. Valorile valide sunt „2.0” sau nul.</li>    </ul>


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
