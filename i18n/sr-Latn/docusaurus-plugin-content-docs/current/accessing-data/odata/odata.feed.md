---
title: OData.Feed
---

# OData.Feed


Vraća tabelu OData feed-ova koju nudi OData usluga.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Vraća tabelu OData feed-ova koju nudi usluga OData iz uri `serviceUri`, zaglavlja `headers`. Logička vrednost koja određuje da li će se koristiti istovremene veze ili opcioni parametar zapisa, `options`, može biti navedena za kontrolu sledećih opcija:

-   `Upit`: Programski dodajte parametre upita u URL adresu bez brige o begstvu.
-   `Headers`: Navođenje ove vrednosti kao zapisa obezbediće dodatna zaglavlja HTTP zahtevu.
-   `ExcludedFromCacheKey`: Navođenje ove vrednosti kao liste će isključiti ove HTTP ključeve zaglavlja iz računanja za keširanje podataka.
-   `ApiKeyName`: Ako ciljna lokacija ima naznaku API ključa, ovaj parametar može da se koristi za navođenje naziva (a ne vrednosti) parametra ključa koji se mora koristiti u URL adresi. Stvarna vrednost ključa je navedena u akreditivima.
-   `Timeout`: Određivanjem ove vrednosti kao trajanja promeniće se vremensko ograničenje za HTTP zahtev. Podrazumevana vrednost je 600 sekundi.
-   `EnableBatch`: Logički (tačno/netačno) koji postavlja da li će se dozvoliti generisanje OData $batch zahteva ako je MaxUriLength prekoračena (podrazumevana vrednost je netačna).
-   `MaxUriLength`: Broj koji označava maksimalnu dužinu dozvoljenog uri-a poslatog usluzi OData. Ako je prekoračeno i EnableBatch je tačno, onda će zahtev biti upućen OData $batch krajnjoj tački, u suprotnom neće uspeti (podrazumevano je 2048).
-   `Concurrent`: Logički (tačno/netačno) kada je postavljeno na tačno, zahtevi za uslugu će se upućivati istovremeno. Kada je postavljeno na netačno, zahtevi će se slati uzastopno. Kada nije navedeno, vrednost će biti određena napomenom AsynchronousRequestsSupported usluge. Ako usluga ne navede da li je AsynchronousRequestsSupported podržan, zahtevi će se slati uzastopno.
-   `ODataVersion`: Broj (3 ili 4) koji navodi verziju OData protokola koja će se koristiti za ovu uslugu OData. Kada nije navedeno, biće tražene sve podržane verzije. Verzija usluge će biti određena zaglavljem OData-verzijom koje vraća usluga.
-   `FunctionOverloads`: Logičko (tačno/netačno) kada je postavljeno na tačno, preopterećenja uvoza funkcija biće navedena u navigatoru kao zasebni unosi, kada je postavljena na netačno, preopterećenja uvoza funkcija će biti navedena kao jedna funkcija ujedinjenja u navigatoru. Podrazumevana vrednost za V3: netačno. Podrazumevana vrednost za V4: tačno.
-   `MoreColumns` : Logički (tačno/netačno) kada je postavljeno na tačno, dodaje kolonu „Još kolona“ svakom feed-u entiteta koji sadrži otvorene tipove i polimorfne tipove. Ovo će sadržati polja koja nisu deklarisana u osnovnom tipu. Kada je netačno, ovo polje nije prisutno. Podrazumevano je netačno.
-   `IncludeAnnotations`: Lista naziva termina ili obrazaca kvalifikovanih za prostore odvojenih zarezima koje treba uključiti sa „\*“ kao džoker znakom. Podrazumevano, nijedna od napomena nije uključena.
-   `IncludeMetadataAnnotations`: Lista naziva termina ili obrazaca kvalifikovanih za prostore odvojenih zarezima koje treba uključiti u zahteve za dokumente metapodataka, sa "\*" kao džoker znakom. Podrazumevano uključuje iste napomene kao IncludeAnnotations.
-   `OmitValues`: Omogućava usluzi OData da izbegne pisanje određenih vrednosti u odgovorima. Ako ih usluga potvrdi, te vrednosti ćemo zaključiti iz izostavljenih polja. Opcije uključuju:
    -   `ODataOmitValues.Nulls` : Dozvoljava usluzi OData da izostavi nulte vrednosti.
-   `Implementation` : Određuje primenu OData konektora za upotrebu. Važeće vrednosti su „2.0“ ili bez vrednosti.


## Examples

### Example #1
Povežite se sa uslugom TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
