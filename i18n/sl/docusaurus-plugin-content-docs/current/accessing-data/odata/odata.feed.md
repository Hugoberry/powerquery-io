---
title: OData.Feed
---

# OData.Feed


Vrne tabelo virov OData, ki jih ponuja storitev OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Vrne tabelo virov OData, ki jih ponuja storitev OData iz uri `serviceUri`, glave `headers`. Logična vrednost, ki določa, ali naj se uporaba sočasne povezave ali izbiren parameter zapisa `options`, lahko določite za nadzor naslednjih možnosti:

-   `Query`: programsko dodajte parametre poizvedbe URL-ju, pri tem pa vam ni treba skrbeti glede ubežnih znakov.
-   `Headers` : če navedete to vrednost kot zapis, omogočite dodatne glave za zahtevo HTTP.
-   `ExcludedFromCacheKey`: če navedete to vrednost v obliki seznama, ti ključi glave HTTP ne bodo del izračuna za predpomnjenje podatkov.
-   `ApiKeyName`: če ciljno spletno mesto vsebuje zapis ključa vmesnika API, lahko s tem parametrom določite ime (ne vrednost) parametra ključa, ki mora biti uporabljeno v naslovu URL. Dejanska vrednost ključa je navedena v poverilnicah.
-   `Timeout` : če določite to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 600 sekund.
-   `EnableBatch` : logična vrednost (true/false), s katero dovolite ustvarjanje zahteve OData $batch, če je prekoračena vrednost"MaxUriLength"(privzeta vrednost je"false").
-   `MaxUriLength` : število, ki označuje največjo dovoljeno dolžino URI-ja, ki je poslan storitvi OData. Če to število prekoračite in je vrednost"EnableBatch""true", bo zahteva izvedena v končni točki OData $batch, v nasprotnem primeru pa je ne bo mogoče izvesti (privzeto število je 2048).
-   `Concurrent` : logična vrednost (true/false), ki hkrati pošlje zahteve storitvi, če je nastavljena na"true". Če je nastavljena na"false", bodo zahteve poslane zaporedoma. če te vrednosti ne določite, bo vrednost določena z opombo"AsynchronousRequestsSupported"storitve. Če storitev ne določa, ali je"AsynchronousRequestsSupported"podprt, bodo zahteve poslane zaporedoma.
-   `ODataVersion` : število (3 ali 4), ki določa različico protokola OData, ki bo uporabljena za to storitev OData. Če te vrednosti ne določite, bodo zahtevane vse podprte različice. Različica storitve bo določena z glavo"OData-Version", ki jo vrne storitev.
-   `FunctionOverloads` : logična vrednost (true/false). Če je nastavljena na"true", bodo preobremenitve uvoza funkcij navedene v krmarju kot ločeni vnosi. Če je nastavljena na"false", bodo preobremenitve uvoza funkcij navedene v krmarju kot ena funkcija Union. Privzeta vrednost za V3 je: false. Privzeta vrednost za V4 je: true.
-   `MoreColumns` : ogična vrednost (true/false). Če jo nastavite na"true", je stolpec"Več stolpcev"dodan vsakemu viru entitete, ki vsebuje odprte in polimorfne tipe. Ta stolpec bo vseboval polja, ki niso določena v osnovnem tipu. Če to vrednost nastavite na"false", to polje ne bo prisotno. Ta vrednost je privzeto nastavljena na"false".
-   `IncludeAnnotations` : z vejicami ločen seznam imen izrazov ali vzorcev, kvalificiranih za imenski prostor, ki jih je treba vključiti z "\*" kot nadomestnim znakom. Privzeto ni vključen noben od pripisov.
-   `IncludeMetadataAnnotations`: seznam imen ali vzorcev izrazov, določenih za imenski prostor, ločenih z vejico, ki jim bo dodan znak"\*"kot nadomestni znak. Privzeto ni vključen noben zapis.
-   `OmitValues` : omogoča storitvi OData, da izpusti zapisovanje nekaterih vrednosti v odgovore. Če je ta možnost potrjena, bodo te vrednosti določene iz izpuščenih polj. Med možnosti spadajo:
    -   `ODataOmitValues.Nulls` : omogoča storitvi OData, da izpusti ničelne vrednosti.
-   `Implementation` : določa uvedbo priključka OData, ki bo uporabljen. Veljavni vrednosti sta"2.0"ali nič.


## Examples

### Example #1
Vzpostavite povezavo s storitev TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
