---
title: OData.Feed
---

# OData.Feed


## Description

Tiek atgriezta OData pakalpojumā nodrošināto OData plūsmu tabula.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Atgriež OData plūsmu tabulu, ko piedāvā OData pakalpojums no URI <code>serviceUri</code>, galvenes <code>headers</code>. Var norādīt Būla vērtību, kura norāda, vai izmantot laiksakritīgus savienojumus vai neobligātu ieraksta parametru <code>options</code>, lai pārvaldītu tālāk minētās opcijas.    <ul>    <li><code>Vaicājums</code>: programmiski pievienojiet vaicājuma parametrus vietrādim URL, neuztraucoties par atsoli. </li>    <li> <code>Headers</code>: norādot šo vērtību kā ierakstu, HTTP pieprasījumam tiks nodrošinātas papildu galvenes.</li>    <li> <code>ExcludedFromCacheKey</code>: norādot šo vērtību kā sarakstu, HTTP galveņu atslēgas vairs netiks izmantotas kešatmiņas datu aprēķinā.</li>    <li> <code>ApiKeyName</code>: ja mērķa vietnē ir kāda informācija par API atslēgu, šo parametru var izmantot, lai norādītu vietrādim URL izmantojamā atslēgas parametra nosaukumu (nevis vērtību). Atslēgas faktiskā vērtība ir norādīta akreditācijas datos.</li>    <li> <code>Timeout</code>: norādot šo vērtību kā ilgumu, tiks mainīts HTTP pieprasījuma taimauts. Noklusējuma vērtība ir 600 sekundes.</li>    <li> <code>EnableBatch</code>: loģiskā vērtība (True/False), kura iestata, vai atļaut ģenerēt OData $pakešveida pieprasījumu, ja tiek pārsniegta vērtība MaxUriLength (noklusējuma vērtība ir False).</li>    <li> <code>MaxUriLength</code>: skaitlis, kurš norāda OData pakalpojumam nosūtāmā URI maksimālo atļauto garumu. Ja tas tiek pārsniegts un parametra EnableBatch vērtība ir True, pieprasījums tiek veikts uz OData $pakešveida uzdevumu galapunktu. Pretējā gadījumā pieprasījums neizdodas (noklusējuma vērtība ir 2048).</li>    <li> <code>Concurrent</code>: loģiskā vērtība (True/False). Ja iestatīts True, pieprasījumi pakalpojumam tiks nosūtīti vienlaicīgi. Ja iestatīts False, pieprasījumi tiks nosūtīti secīgi. Ja nav norādīts, vērtību noteiks pakalpojuma anotācija AsynchronousRequestsSupported. Ja pakalpojumā nav norādīts, vai tiek atbalstīta anotācija AsynchronousRequestsSupported, pieprasījumi tiks nosūtīti secīgi.</li>    <li> <code>ODataVersion</code>: skaitlis (3 vai 4), kas apzīmē OData protokola versiju, kura tiek izmantota šim OData pakalpojumam. Ja nav norādīts, tiks pieprasītas visas atbalstītās versijas. Pakalpojuma versija tiks noteikta, izmantojot pakalpojuma atgriezto galveni OData-Version.</li>    <li> <code>FunctionOverloads</code>: loģiskā vērtība (True/False). Ja iestatīts True, funkcijas importa pārslodzes tiks ietvertas navigatora sarakstā kā atsevišķi ieraksti. Ja iestatīts False, funkcijas importa pārslodzes tiks ietvertas navigatora sarakstā kā apvienota funkcija. V3 noklusējuma vērtība: False. V4 noklusējuma vērtība: True.</li>    <li> <code>MoreColumns</code> : loģiskā vērtība (True/False). Ja iestatīts True, kolonna More Columns tiek pievienota visām entītijas plūsmām, kas satur atklātus un polimorfiskus tipus. Šī kolonna satur laukus, kas nav noteikti pamattipā. Ja iestatīts False, šis lauks netiek ietverts. Noklusējuma vērtība ir False.</li>    <li> <code>IncludeAnnotations</code>: komatatdalīts saraksts, kurā ietverti nosaukumvietas kvalificētu terminu nosaukumi vai shēmas, kas jāiekļauj ar aizstājējzīmi “\*”. Pēc noklusējuma netiek ietverta neviena no anotācijām.</li>    <li> <code>IncludeMetadataAnnotations</code>: komatatdalīts saraksts, kurā ietverti nosaukumvietas kvalificētu terminu nosaukumi vai shēmas, kas jāiekļauj metadatu dokumentu pieprasījumos ar aizstājējzīmi “\*”. Pēc noklusējuma tiek ietvertas tādas pašas anotācijas, kādas ir sarakstā IncludeAnnotations.</li>    <li> <code>OmitValues</code>: atļauj pakalpojumā OData atbildēs nerakstīt noteiktas vērtības. Ja šī opcija tiks apstiprināta, attiecīgās vērtības tiks izsecinātas no izlaistajiem laukiem. Pieejama, piemēram, šādas opcijas:      <ul>        <li><code>ODataOmitValues.Nulls</code>: atļauj pakalpojumā OData izlaist vērtības Null.</li>      </ul>    </li>    <li> <code>Implementation</code> : norāda izmantojamā OData savienotāja ieviešanu. Derīgās vērtības ir 2.0 vai Null.</li>    </ul>


## Examples

### Example #1 
Izveidot savienojumu ar pakalpojumu TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
