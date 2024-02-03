---
title: OData.Feed
---

# OData.Feed


## Description

Vráti tabuľku informačných kanálov OData ponúknutú službou OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Vráti tabuľku informačných kanálov OData ponúknutú službou OData z identifikátora URI <code>serviceUri</code> s hlavičkami <code>headers</code>. Booleovská hodnota určujúca, či použiť súbežné pripojenia alebo voliteľný parameter záznamu <code>options</code>, sa môže zadať na ovládanie týchto možností:    <ul>    <li><code>Query</code>: Programovo pridá parametre dotazu do URL adresy bez toho, aby ste sa museli starať o zadávanie ukončovacích znakov. </li>    <li> <code>Headers</code>: Zadaním tejto hodnoty ako záznamu sa do požiadavky HTTP zadajú ďalšie hlavičky.</li>    <li> <code>ExcludedFromCacheKey</code>: Zadaním tejto hodnoty ako zoznamu sa vylúčia tieto kľúče hlavičiek HTTP z výpočtu údajov vyrovnávacej pamäte.</li>    <li> <code>ApiKeyName</code>: Ak cieľová lokalita do istej miery používa kľúč rozhrania API, tento parameter možno použiť na určenie názvu (nie hodnoty) parametra kľúča, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je uvedená v poverení.</li>    <li> <code>Timeout</code>: Zadaním tejto hodnoty ako trvania sa zmení časový limit požiadavky HTTP. Predvolená hodnota je 600 sekúnd.</li>    <li> <code>EnableBatch</code>: Logická hodnota (true/false), ktorá nastaví, či povoliť generovanie žiadosti OData $batch v prípade prekročenia parametra MaxUriLength (predvolená možnosť je false).</li>    <li> <code>MaxUriLength</code>: Číslo, ktoré určuje maximálnu dĺžku povoleného identifikátora URI odoslaného do služby OData. V prípade, že sa prekročí a hodnota parametra EnableBatch je true, požiadavka sa vykoná v rámci koncového bodu OData $batch, v opačnom prípade zlyhá (predvolená hodnota je 2048).</li>    <li> <code>Concurrent</code>: Logická hodnota (true/false). Keď je nastavená na hodnotu true, požiadavky určené službe budú vykonané zároveň. Ak je nastavená na hodnotu false, požiadavky budú vykonané postupne. Ak nie je zadaná, hodnotu určí anotácia služby AsynchronousRequestsSupported. Ak služba neudáva, či sa podporuje AsynchronousRequestsSupported, požiadavky sa budú vykonávať postupne.</li>    <li> <code>ODataVersion</code>: Číslo (3 alebo 4) udávajúce verziu protokolu OData, ktorá sa má použiť pre túto službu OData. Ak nie je zadané, požiadavka sa odošle do všetkých podporovaných verzií. Verziu služby určí hlavička OData-Version vrátená službou.</li>    <li> <code>FunctionOverloads</code>: Logický parameter (true/false). Pri nastavení na hodnotu true budú preťaženia importu funkcií uvedené v navigátore ako samostatné položky. Pri nastavení na hodnotu false budú preťaženia importu funkcií uvedené v navigátore ako jedna zjednocovacia funkcia. Predvolená hodnota pre V3: false. Predvolená hodnota pre V4: true.</li>    <li> <code>MoreColumns</code>: Logická hodnota (true/false). Keď je nastavená na hodnotu true, ku každému informačnému kanálu entity s otvorenými typmi a polymorfnými typmi sa pridá stĺpec More Columns (Ďalšie stĺpce). Bude obsahovať polia, ktoré nie sú deklarované v základnom type. Keď je nastavená na hodnotu false, pole sa nezobrazí. Predvolená hodnota je false.</li>    <li> <code>IncludeAnnotations</code>: Zoznam čiarkou oddelených názvov alebo vzorov kvalifikovaných výrazov v priestore názvov, ktoré sa majú zahrnúť so znakom hviezdičky (\*) ako zástupným znakom. Predvolene nie sú zahrnuté žiadne komentáre.</li>    <li> <code>IncludeMetadataAnnotations</code>: Zoznam čiarkou oddelených názvov alebo vzorov kvalifikovaných výrazov v priestore názvov, ktoré sa majú zahrnúť do metaúdajových požiadaviek na dokument, v ktorých sa ako zástupný znak použije hviezdička (\*). Predvolene obsahuje tie isté komentáre ako pre parameter IncludeAnnotations.</li>    <li> <code>OmitValues</code>: Umožňuje službe OData nevypisovať určité hodnoty v odpovediach. V prípade potvrdenia určíme tieto hodnoty z vynechaných polí. Možnosti:      <ul>        <li><code>ODataOmitValues.Nulls</code>: Umožňuje službe OData vynechať hodnoty null.</li>      </ul>    </li>    <li> <code>Implementation</code>: Určuje implementáciu konektora OData, ktorý sa má použiť. Platné hodnoty sú 2.0 alebo null.</li>    </ul>


## Examples

### Example #1 
Pripojí sa k službe TripPin OData.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
