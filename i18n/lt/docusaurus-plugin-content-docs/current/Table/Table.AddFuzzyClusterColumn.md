---
title: Table.AddFuzzyClusterColumn
---

# Table.AddFuzzyClusterColumn


## Description

Įtraukiamas naujas stulpelis su pavyzdinėmis reikšmėmis, gautomis naudojant apytikslio nurodyto stulpelio lentelėje grupavimo reikšmes.


## Syntax

```powerquery
Table.AddFuzzyClusterColumn(
    table as table,
    columnName as text,
    newColumnName as text,
    optional options as record
) as table
```


## Details

Įtraukiamas naujas stulpelis <code>newColumnName</code> į <code>table</code> su <code>columnName</code> pavyzdinėmis reikšmėmis. Pavyzdinės reikšmės gaunamos pagal apytikslį reikšmių <code>columnName</code> (kiekvienos eilutės) derinimą.    Gali būti įtrauktas pasirinktinis rinkinys <code>options</code>, nurodantis, kaip lyginti raktų stulpelius. Parinktys apima:    <ul><li><code>Culture</code> : Leidžiama grupuoti įrašus pagal konkrečios kultūros taisykles. Tai gali būti bet kuris tinkamas kultūros pavadinimas. Pavyzdžiui, kultūros parinktimi „ja-JP“ sugrupuojami įrašai pagal japonų kultūrą. Numatytoji reikšmė yra „“, kuria grupuojama pagal pastoviąją anglų kultūrą.</li><li><code>IgnoreCase</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama grupuoti raktus neskiriant didžiųjų ir mažųjų raidžių. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuogės“ grupuojama su reikšme „vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>IgnoreSpace</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama sujungti teksto dalis, kad būtų galima rasti grupes. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuo gės“ grupuojama su reikšme „Vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>SimilarityColumnName</code> : Stulpelio, kuriame rodomas panašumas tarp įvesties reikšmės ir nominaliosios tos įvesties reikšmės, pavadinimas. Numatytoji reikšmė yra neapibrėžta. Tokiu atveju naujas stulpelis, skirtas panašumams, nebus įtrauktas.</li><li><code>Threshold</code> : Skaičius nuo 0,00 iki 1,00, nurodantis panašumo įvertį, pagal kurį bus grupuojamos dvi reikšmės.    Pavyzdžiui, reikšmės „Vynuogės“ ir „Vynuoės“ (be „g“) grupuojamos tik tada, jei ši parinktis nustatyta į mažiau nei 0,90.  1,00 ribinė reikšmė leidžia tik tikslius atitikmenis.    (Atminkite, kad apytikslis „tikslus atitikmuo“ gali nepaisyti skirtumų, pvz., didžiųjų raidžių, žodžių tvarkos ir skyrybos ženklų.) Numatytoji reikšmė yra 0,80.</li><li><code>TransformationTable</code> : Lentelė, kurioje leidžiama grupuoti įrašus pagal pasirinktinių reikšmių susiejimus. Joje turi būti stulpeliai „Nuo“ ir „Iki“. Pavyzdžiui, reikšmė „Vynuogės“ grupuojama su reikšme „Razinos“, jei pakeitimo lentelė pateikiama su stulpeliu „Nuo“, kuriame nurodyta reikšmė „Vynuogės“, ir stulpeliu „Iki“, kuriame nurodyta reikšmė „Razinos“. Įsidėmėkite, kad keitimas bus pritaikytas visais teksto pasikartojimų pakeitimo lentelėje atvejais. Anksčiau pateiktoje pakeitimo lentelėje reikšmė „Vynuogės yra saldžios“ taip pat bus grupuojama su reikšme „Razinos yra saldžios“.</li></ul><br />   


## Examples

### Example #1 
Raskite pavyzdines darbuotojų vietos reikšmes.
```powerquery
Table.AddFuzzyClusterColumn(
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
    "Location_Cleaned",
    [IgnoreCase = true, IgnoreSpace = true]
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [EmployeeID = 1, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 2, Location = "seattl", Location_Cleaned = "Seattle"],
        [EmployeeID = 3, Location = "Vancouver", Location_Cleaned = "Vancouver"],
        [EmployeeID = 4, Location = "Seatle", Location_Cleaned = "Seattle"],
        [EmployeeID = 5, Location = "vancover", Location_Cleaned = "Vancouver"],
        [EmployeeID = 6, Location = "Seattle", Location_Cleaned = "Seattle"],
        [EmployeeID = 7, Location = "Vancouver", Location_Cleaned = "Vancouver"]
    },
    type table [EmployeeID = nullable number, Location = nullable text, Location_Cleaned = nullable text]
)
```




## Category
Table.Transformation
