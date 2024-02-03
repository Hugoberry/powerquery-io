---
title: OData.Feed
---

# OData.Feed


## Description

Vraća tabelu OData feed-ova koju nudi OData usluga.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Vraća tabelu OData feed-ova koju nudi usluga OData iz uri <code>serviceUri</code>, zaglavlja <code>headers</code>. Logička vrednost koja određuje da li će se koristiti istovremene veze ili opcioni parametar zapisa, <code>options</code>, može biti navedena za kontrolu sledećih opcija:    <ul>    <li><code>Upit</code>: Programski dodajte parametre upita u URL adresu bez brige o begstvu. </li>    <li> <code>Zaglavlja</code> : Navođenje ove vrednosti kao zapisa obezbediće dodatna zaglavlja HTTP zahtevu.</li>    <li> <code>ExcludedFromCacheKey</code>: Navođenje ove vrednosti kao liste će isključiti ove HTTP ključeve zaglavlja iz računanja za keširanje podataka.</li>    <li> <code>ApiKeyName</code> : Ako ciljni sajt ima pojam API ključa, ovaj parametar se može koristiti za određivanje imena (ne vrednosti) ključnog parametra koji se mora koristiti u URL adresi. Stvarna vrednost ključa je navedena u akreditivima.</li>    <li> <code>Timeout</code> : Određivanjem ove vrednosti kao trajanja promeniće se vremensko ograničenje za HTTP zahtev. Podrazumevana vrednost je 600 sekundi.</li>    <li> <code>EnableBatch</code> : Logički (tačno/netačno) koji postavlja da li će se dozvoliti generisanje OData $batch zahteva ako je MaxUriLength prekoračena (podrazumevana vrednost je netačna).</li>    <li> <code>MaxUriLength</code> : Broj koji označava maksimalnu dužinu dozvoljenog uri-a poslatog usluzi OData Ako je prekoračeno i EnableBatch je tačno, onda će zahtev biti upućen OData $batch krajnjoj tački, u suprotnom neće uspeti (podrazumevano je 2048).</li>    <li> <code>Concurrent</code> : Logički (tačno/netačno) kada je postavljeno na tačno, zahtevi za uslugu će se upućivati istovremeno. Kada je postavljeno na Netačno, zahtevi će se praviti uzastopno. Kada nije navedena, vrednost će biti određena napomenom AsynchronousRequestsSupported usluge. Ako usluga ne navede da li je AsynchronousRequestsSupported podržan, zahtevi će se slati uzastopno.</li>    <li> <code>ODataVersion</code> : Broj (3 ili 4) koji navodi verziju OData protokola koja će se koristiti za ovu uslugu OData. Kada nije navedeno, biće tražene sve podržane verzije. Verzija usluge će biti određena zaglavljem OData-verzijom koje vraća usluga.</li>    <li> <code>FunctionOverloads</code> : Logičko (tačno/netačno) kada je postavljeno na tačno, preopterećenja uvoza funkcija biće navedena u navigatoru kao zasebni unosi, kada je postavljena na netačno, preopterećenja uvoza funkcija će biti navedena kao jedna funkcija ujedinjenja u navigatoru. Podrazumevana vrednost za V3: netačno. Podrazumevana vrednost za V4: tačno.</li>    <li> <code>MoreColumns</code> : Logički (tačno/netačno) kada je postavljeno na tačno, dodaje kolonu „Još kolona“ svakom feed-u entiteta koji sadrži otvorene tipove i polimorfne tipove. Ovo će sadržati polja koja nisu deklarisana u osnovnom tipu. Kada je netačno, ovo polje nije prisutno. Podrazumevano je netačno.</li>    <li> <code>IncludeAnnotations</code> : Lista naziva termina ili obrazaca kvalifikovanih za prostore odvojenih zarezima koje treba uključiti sa „\*“ kao džoker znakom. Podrazumevano, nijedna od napomena nije uključena.</li>    <li> <code>IncludeMetadataAnnotations</code> : Lista naziva termina ili obrazaca kvalifikovanih za prostore odvojenih zarezima koje treba uključiti u zahteve za dokumente metapodataka, sa  kao džoker znakom. Podrazumevano uključuje iste napomene kao IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Omogućava usluzi OData da izbegne pisanje određenih vrednosti u odgovorima. Ako ih usluga potvrdi, te vrednosti ćemo zaključiti iz izostavljenih polja. Opcije uključuju:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Dozvoljava usluzi OData da izostavi nulte vrednosti.</li>      </ul>    </li>    <li> <code>Implementation</code> : Određuje implementaciju OData konektora za upotrebu. Važeće vrednosti su „2.0“ ili bez vrednosti.</li>    </ul>


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
