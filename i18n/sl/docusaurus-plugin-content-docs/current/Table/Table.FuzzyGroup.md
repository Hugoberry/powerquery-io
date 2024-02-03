---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Združi vrstice v tabeli na podlagi delnega ujemanja ključev.


## Syntax

```powerquery
Table.FuzzyGroup(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional options as record
) as table
```


## Details

Združi vrstice tabele <code>table</code> z mehkim ujemanjem vrednosti v navedenem stolpcu <code>key</code> za vsako vrstico.    Za vsako skupino je ustvarjen zapis, ki vsebuje stolpce ključev (in njihove vrednosti) ter vse združene stolpce, ki jih določa <code>aggregatedColumns</code>.    Ta funkcija ne more zagotoviti, da bo vrnila vrstice z nespremenljivim vrstnim redom.    Dodate lahko izbirni nabor <code>options</code>, da določite način primerjave stolpcev ključev. Med možnosti spadajo:    <ul><li><code>Culture</code> : Omogoča združevanje zapisov na podlagi pravil, značilnih za kulturo. Uporabljeno je lahko katero koli veljavno ime kulture. Primer: če je možnost &#187;Kultura&#171; nastavljena na &#187;sl-SI&#171;, so zapisi združeni na podlagi slovenske kulture. Privzeta vrednost je &quot;&quot;, ki vsebuje skupine na podlagi nespremenljive angleške kulture.</li><li><code>IgnoreCase</code> : Logična vrednost (true/false), ki omogoča združevanje ključev z razlikovanjem med velikimi in malimi črkami. Primer: če je &#187;true&#171;, je beseda &#187;Grozdje&#171; združena z besedo &#187;grozdje&#171;. Privzeta vrednost je &#187;true&#171;.</li><li><code>IgnoreSpace</code> : Logična vrednost (true/false), ki omogoča kombiniranje delov besedila za iskanje skupin. Primer: če je &#187;true&#171;, je beseda &#187;Gro zdje&#171; združena z besedo &#187;Grozdje&#171;. Privzeta vrednost je &#187;true&#171;.</li><li><code>SimilarityColumnName</code> : Ime stolpca, ki prikazuje podobnost med vhodno in reprezentativno vrednostjo za ta vnos. Privzeta vrednost je ničelna, ki ne doda novega stolpca za podobnosti.</li><li><code>Threshold</code> : Število med 0,00 in 1,00, ki določa stopnjo podobnosti, pri kateri bosta dve vrednosti združeni.    Na primer, &#187;grozdje&#171; in &#187;grodje&#171; (brez črke &#187;z&#171;) sta združeni le, če je ta možnost nastavljena na manj kot 0,90.    Prag 1,00 omogoča le natančna ujemanja.    (Upoštevajte, da se pri nejasnem &#187;natančnem ujemanju&#171; lahko zanemarijo razlike, kot so črkovanje, besedni red in ločila.)    Privzeta vrednost je 0,80.</li><li><code>TransformationTable</code> : Tabela, ki omogoča združevanje zapisov na podlagi preslikav vrednosti po meri. Vsebovati mora stolpca &#187;Iz&#171; in &#187;V&#171;. Primer: beseda &#187;Grozdje&#171; je združena z besedo &#187;Rozine&#171;, če je v tabeli pretvorbe naveden stolpec &#187;Iz&#171;, ki vsebuje &#187;Grozdje&#171;, in stolpec &#187;V&#171;, ki vsebuje &#187;Rozine&#171;. Upoštevajte, da bo pretvorba uporabljena za vse ponovitve besedila v tabeli pretvorbe. Z zgornjo tabelo pretvorbe bo besedna zveza &#187;Grozdje je sladko&#171; združena tudi z besedno zvezo &#187;Rozine so sladke&#171;.</li></ul><br />    


## Examples

### Example #1 
Združite tabelo tako, da dodate stolpec za združevanje [Štetje], ki vsebuje število zaposlenih na posamezni lokaciji (&#34;vsak Table.RowCount(_))&#34;).
```powerquery
Table.FuzzyGroup(
    Table.FromRecords(
        {
            [EmployeeID = 1, Location = "Seattle"],
            [EmployeeID = 2, Location = "seattl"],
            [EmployeeID = 3, Location = "Vancouver"],
            [EmployeeID = 4, Location = "Seatle"],
            [EmployeeID = 5, Location = "vancover"],
            [EmployeeID = 6, Location = "Seattle"],
            [EmployeeID = 7, Location = "Vancouver"]
        },
        type table [EmployeeID = nullable number, Location = nullable text]
    ),
    "Location",
    {"Count", each Table.RowCount(_)},
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords({
    [Location = "Seattle", Count = 4],
    [Location = "Vancouver", Count = 3]
})
```




## Category
Table.Transformation
