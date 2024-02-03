---
title: Table.FuzzyGroup
---

# Table.FuzzyGroup


## Description

Zoskupí riadky v tabuľke na základe približnej zhody kľúčov.


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

Zoskupí riadky tabuľky <code>table</code> podľa približnej zhody hodnôt v zadanom stĺpci <code>key</code> (pre každý riadok).    Pre každú skupinu sa vytvorí záznam, ktorý obsahuje kľúčové stĺpce (a ich hodnoty) spolu so všetkými agregovanými stĺpcami určenými pomocou <code>aggregatedColumns</code>.    Táto funkcia nemôže zaručiť vrátenie pevného poradia riadkov.    Dá sa zahrnúť aj nepovinná množina <code>options</code>, ktorá určuje, ako sa majú kľúčové stĺpce porovnávať. Možnosti zahŕňajú:     <ul><li><code>Culture</code> : Povoľuje zoskupenie z&#225;znamov na z&#225;klade pravidiel špecifick&#253;ch pre jazykov&#250; verziu. M&#244;že &#237;sť o ľubovoľn&#253; platn&#253; n&#225;zov jazykovej verzie. Možnosť jazykovej verzie ja-JP napr&#237;klad zoskup&#237; z&#225;znamy podľa japonskej jazykovej verzie. Predvolen&#225; hodnota je &quot;&quot;, ktor&#225; zoskupuje na z&#225;klade invariantnej anglickej jazykovej verzie.</li><li><code>IgnoreCase</code> : Logick&#225; hodnota (true/false), ktor&#225; povoľuje zoskupenie kľ&#250;čov bez rozlišovania veľk&#253;ch a mal&#253;ch p&#237;smen. Pri hodnote True sa napr&#237;klad v&#253;raz „Hrozno“ zoskup&#237; s hodnotami „hrozno“. Predvolen&#225; hodnota je True.</li><li><code>IgnoreSpace</code> : Logick&#225; hodnota (true/false), ktor&#225; umožňuje skombinovať časti textu s cieľom n&#225;jsť skupiny. Pri hodnote True sa napr&#237;klad v&#253;raz „Hro zno“ zoskup&#237; s hodnotami „hrozno“. Predvolen&#225; hodnota je True.</li><li><code>SimilarityColumnName</code> : N&#225;zov stĺpca, ktor&#253; zobrazuje podobnosť medzi vstupnou a reprezentat&#237;vnou hodnotou dan&#233;ho vstupu. Predvolen&#225; hodnota je null. V takom pr&#237;pade sa neprid&#225; nov&#253; stĺpec pre podobnosti.</li><li><code>Threshold</code> : Č&#237;slo medzi 0,00 a 1,00 určuj&#250;ce sk&#243;re podobnosti, pri ktorom sa dve hodnoty zoskupia.     Hodnoty Hrozno“ a Hrono“ (ch&#253;ba p&#237;smeno z) sa napr&#237;klad zoskupia len vtedy, ak je t&#225;to možnosť nastaven&#225; na hodnotu nižšiu ako 0,90.    Prahov&#225; hodnota 1,00 povoľuje iba presn&#233; zhody.    (Upozorňujeme, že približn&#225; „presn&#225; zhoda“ m&#244;že ignorovať rozdiely, ako s&#250; mal&#233; a veľk&#233; p&#237;smen&#225;, slovosled alebo interpunkcia.)    Predvolen&#225; hodnota je 0,80.</li><li><code>TransformationTable</code> : Tabuľka, ktor&#225; povoľuje zoskupenie na z&#225;klade priraden&#237; vlastn&#253;ch hodn&#244;t. Mala by obsahovať stĺpce „From“ a „To“. Hodnota „Hrozno“ sa napr&#237;klad zoskup&#237; s hodnotou „Hrozienko“, ak sa zad&#225; tabuľka transform&#225;cie, v ktorej stĺpec „From“ obsahuje v&#253;raz „Hrozno“ a stĺpec „To“ obsahuje v&#253;raz „Hrozienko“. Všimnite si, že transform&#225;cia sa použije na všetky v&#253;skyty textu v tabuľke transform&#225;cie. Pomocou vyššie uvedenej tabuľky transform&#225;cie sa aj hodnoty „Hrozno je sladk&#233;“ bud&#250; zoskupovať s hodnotami „hrozienko je sladk&#233;“.</li></ul><br />    


## Examples

### Example #1 
Zoskupte tabuľku pridaním agregovaného stĺpca [Count], ktorý obsahuje počet zamestnancov v každom mieste (each Table.RowCount(_))).
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
