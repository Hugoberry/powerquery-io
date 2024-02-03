---
title: OData.Feed
---

# OData.Feed


## Description

Pateikiama „OData“ informacijos santraukų, kurias siūlo „OData“ tarnyba, lentelė.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Pateikiama „OData“ tarnybos siūlomų „OData“ informacijos santraukų lentelė iš URI <code>serviceUri</code>, antraščių <code>headers</code>. Galima nurodyti Bulio logikos reikšmę, nurodančią, ar naudoti vienalaikius ryšius, ar pasirinktinio įrašo parametrą, <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul>    <li><code>Query</code>: programiškai įtraukite užklausos parametrus į URL nesirūpindami dėl kaitos. </li>    <li> <code>Headers</code>: nurodžius šią reikšmę kaip įrašą, į HTTP užklausą bus įtraukta papildomų antraščių.</li>    <li> <code>ExcludedFromCacheKey</code>: nurodžius šią reikšmę kaip sąrašą, apskaičiuojant talpykloje kaupiamus duomenis nebus naudojami šie HTTP antraščių raktai.</li>    <li> <code>ApiKeyName</code>: jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL adrese naudotino rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.</li>    <li> <code>Timeout</code>: nurodžius šią reikšmę kaip trukmę, bus pakeistas HTTP užklausos skirtasis laikas. Numatytoji reikšmė yra 600 sekundžių.</li>    <li> <code>EnableBatch</code>: loginė reikšmė („true“ / „false“), kuri nustato, ar leisti generuoti „OData“ $batch užklausą, jei viršyta reikšmė MaxUriLength reikšmė (numatytoji reikšmė yra „false“).</li>    <li> <code>MaxUriLength</code>: skaičius, kuris nurodo maksimalų leidžiamą „OData“ tarnybai siunčiamo URI ilgį. Jei ilgis viršytas ir reikšmė EnableBatch yra „true“, užklausa bus pateikta „OData“ $batch galiniam punktui, kitu atveju jos pateikti nepavyks (numatytoji reikšmė yra 2048).</li>    <li> <code>Concurrent</code>: loginė reikšmė („true“ / „false“). Jei nustatyta reikšmė „true“, užklausos tarnybai teikiamos tuo pačiu metu. Jei nustatyta reikšmė „false“, užklausos teikiamos viena po kitos. Jei reikšmė nenurodyta, ją lems tarnybos komentaras AsynchronousRequestsSupported. Jei tarnyba nenurodo, ar AsynchronousRequestsSupported yra palaikomas, užklausos bus teikiamos viena po kitos.</li>    <li> <code>ODataVersion</code>: skaičius (3 arba 4), nurodantis „OData“ protokolo versiją, kurią turi naudoti ši „OData“ tarnyba. Jei nenurodyta, bus prašoma visų palaikomų versijų. Tarnybos versiją lems tarnybos pateikta antraštė „OData-Version“.</li>    <li> <code>FunctionOverloads</code>: loginė reikšmė („true“ / „false“). Jei nustatyta reikšmė „true“, funkcijos importavimo perkrovos naršyklėje bus išvardytos kaip atskiri įrašai. Jei nustatyta reikšmė „false“, funkcijos importavimo perkrovos naršyklėje bus išvardytos kaip viena bendra funkcija. Numatytoji 3 versijos reikšmė: „false“. Numatytoji 4 versijos reikšmė: „true“.</li>    <li> <code>MoreColumns</code>: loginė reikšmė („true“ / „false“). Jei nustatyta reikšmė „true“, į kiekvieno objekto informacijos santrauką įtraukiamas stulpelis Daugiau stulpelių su atviraisiais ir polimorfiniais tipais. Jame bus nurodyti pagrindiniame tipe nepaskelbti laukai. Jei nustatyta reikšmė „false“, šio lauko nebus. Numatytoji reikšmė yra „false“.</li>    <li> <code>IncludeAnnotations</code>: kableliais atskirtų vardų sričiai tinkamų terminų pavadinimų ar šablonų, įtrauktinų su \* (kaip pakaitos simbolis), sąrašas. Pagal numatytuosius parametrus neįtraukiami jokie komentarai.</li>    <li> <code>IncludeMetadataAnnotations</code>: kableliais atskirtų vardų sričiai tinkamų terminų pavadinimų ar šablonų, įtrauktinų metaduomenų dokumentų užklausose (kaip pakaitos simbolis), sąrašas. Pagal numatytuosius parametrus įtraukiami tie patys komentarai kaip IncludeAnnotations.</li>    <li> <code>OmitValues</code>: leidžia „OData“ tarnybai rašant atsakymus nerašyti tam tikrų reikšmių. Jei tarnyba patvirtina, šios reikšmės bus nustatytos iš praleistų laukų. Galimos parinktys:      <ul>        <li><code>ODataOmitValues.Nulls</code>: „OData“ tarnybai leidžiama praleisti Null reikšmes.</li>     </ul>    </li>    <li><code>Implementation</code>: nurodo, kurią „OData“ jungtį naudoti. Tinkamos reikšmės yra 2.0 arba Null.</li>    </ul>


## Examples

### Example #1 
Prisijunkite prie „TripPin“ „OData“ tarnybos.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
