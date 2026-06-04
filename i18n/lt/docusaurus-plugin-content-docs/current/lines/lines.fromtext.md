---
title: Lines.FromText
---

# Lines.FromText


Tekstinė reikšmė konvertuojama į tekstinių reikšmių sąrašą, išskaidytą pagal eilučių lūžius. Jei includeLineSeparators reikšmė yra Teisinga, tada eilučių lūžio simboliai įtraukiami į tekstą.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Teksto reikšmė konvertuojama į tekstinių reikšmių, padalytų į eilučių lūžius, sąrašą.

-   `text`: teksto reikšmė, kurią reikia konvertuoti į teksto reikšmių sąrašą.
-   `quoteStyle`: nurodo, kaip apdorojami eilučių lūžiai. `quoteStyle` reikšmę galima `null`. Numatytoji reikšmė yra `QuoteStyle.None`.
-   `includeLineSeparators`: nurodo, ar į tekstą įtraukti eilutės lūžio simbolius. `includeLineSeparators` reikšmę galima `null`. Numatytoji reikšmė yra `false`.

Jei nurodytas `quoteStyle` įrašas (ir `includeLineSeparators` yra `null`), galima pateikti šiuos įrašų laukus:

-   `QuoteStyle`: nurodo, kaip apdorojami eilučių lūžiai su kabutėmis.
    -   `QuoteStyle.Csv`: eilučių lūžiai su kabutėmis laikomi duomenų dalimi, o ne dabartinės eilutės pabaiga.
    -   `QuoteStyle.None`: visi eilučių lūžiai laikomi dabartinės eilutės pabaiga, net kai jie įvyksta reikšmės su kabutėmis viduje. Ši reikšmė yra numatytoji, jei nenurodyta parinktis `CsvStyle`.
-   `CsvStyle`: nurodo, kaip apdorojamos kabutės. Negalima naudoti su `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: kabutės lauke yra reikšmingos tik iš karto po `skyriklio`.
    -   `CsvStyle.QuoteAlways`: kabutės lauke visada yra reikšmingos nepaisant jų vietos.
-   `Skyriklis`: vieno simbolio skyriklis. Galima naudoti tik su `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: nurodo, ar į tekstą įtraukti eilutės lūžio simbolius. Numatytoji reikšmė yra `false`.



## Category
Lines
