---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Grupuoja eilutes lentelėje pagal apytikslį raktų atitikimą.


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

Grupuojamos <code>table</code> eilutės pagal apytikslį reikšmių, pateikiamų nurodytame stulpelyje, <code>key</code>, kiekvienoje eilutėje, derinimą.    Kiekvienai grupei įrašas yra sudarytas su raktų stulpeliais (ir jų reikšmėmis) kartu su visais agreguotais stulpeliais, nurodytais <code>aggregatedColumns</code>.    Šia funkcija negarantuojama, kad bus pateikta ištaisyta eilučių tvarka.    Gali būti įtrauktas pasirinktinis <code>options</code> rinkinys, nurodantis, kaip lyginti raktų stulpelius. Parinktys apima:    <ul><li><code>Culture</code> : Leidžiama grupuoti įrašus pagal konkrečios kultūros taisykles. Tai gali būti bet kuris tinkamas kultūros pavadinimas. Pavyzdžiui, kultūros parinktimi „ja-JP“ sugrupuojami įrašai pagal japonų kultūrą. Numatytoji reikšmė yra „“, kuria grupuojama pagal pastoviąją anglų kultūrą.</li><li><code>IgnoreCase</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama grupuoti raktus neskiriant didžiųjų ir mažųjų raidžių. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuogės“ grupuojama su reikšme „vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>IgnoreSpace</code> : Loginė (teisinga / klaidinga) reikšmė, kuria leidžiama sujungti teksto dalis, kad būtų galima rasti grupes. Pavyzdžiui, kai nustatyta kaip teisinga, reikšmė „Vynuo gės“ grupuojama su reikšme „Vynuogės“. Numatytoji reikšmė yra nustatyta kaip teisinga.</li><li><code>SimilarityColumnName</code> : Stulpelio, kuriame rodomas panašumas tarp įvesties reikšmės ir nominaliosios tos įvesties reikšmės, pavadinimas. Numatytoji reikšmė yra neapibrėžta. Tokiu atveju naujas stulpelis, skirtas panašumams, nebus įtrauktas.</li><li><code>Threshold</code> : Skaičius nuo 0,00 iki 1,00, nurodantis panašumo įvertį, pagal kurį bus grupuojamos dvi reikšmės.    Pavyzdžiui, reikšmės „Vynuogės“ ir „Vynuoės“ (be „g“) grupuojamos tik tada, jei ši parinktis nustatyta į mažiau nei 0,90.  1,00 ribinė reikšmė leidžia tik tikslius atitikmenis.    (Atminkite, kad apytikslis „tikslus atitikmuo“ gali nepaisyti skirtumų, pvz., didžiųjų raidžių, žodžių tvarkos ir skyrybos ženklų.) Numatytoji reikšmė yra 0,80.</li><li><code>TransformationTable</code> : Lentelė, kurioje leidžiama grupuoti įrašus pagal pasirinktinių reikšmių susiejimus. Joje turi būti stulpeliai „Nuo“ ir „Iki“. Pavyzdžiui, reikšmė „Vynuogės“ grupuojama su reikšme „Razinos“, jei pakeitimo lentelė pateikiama su stulpeliu „Nuo“, kuriame nurodyta reikšmė „Vynuogės“, ir stulpeliu „Iki“, kuriame nurodyta reikšmė „Razinos“. Įsidėmėkite, kad keitimas bus pritaikytas visais teksto pasikartojimų pakeitimo lentelėje atvejais. Anksčiau pateiktoje pakeitimo lentelėje reikšmė „Vynuogės yra saldžios“ taip pat bus grupuojama su reikšme „Razinos yra saldžios“.</li></ul><br />   


## Examples

### Example #1 
Grupuokite lentelę pridėdami agreguotą stulpelį [Count], kuriame yra darbuotojų skaičius kiekvienoje vietoje (kiekvienas Table.RowCount(_))).
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
