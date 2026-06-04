---
title: Lines.FromBinary
---

# Lines.FromBinary


Dvejetainė reikšmė konvertuojama į teksto reikšmių sąrašą, išskaidytą ties eilučių lūžiais. Jei nurodytas kabučių stilius, tada eilučių lūžiai gali būti rodomi kabutėse. Jei includeLineSeparators reikšmė yra Teisinga, tada eilučių lūžio simboliai įtraukiami į tekstą.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Dvejetainė reikšmė konvertuojama į tekstinių reikšmių, padalytų į eilučių lūžius, sąrašą.

-   `binary`: dvejetainė reikšmė, kurią reikia konvertuoti į sąrašą.
-   `quoteStyle`: nurodo, kaip apdorojami eilučių lūžiai. `quoteStyle` reikšmę galima `null`. Numatytoji reikšmė yra `QuoteStyle.None`.
-   `includeLineSeparators`: nurodo, ar į tekstą įtraukti eilutės lūžio simbolius. `includeLineSeparators` reikšmę galima `null`. Numatytoji reikšmė yra `false`.
-   `encoding`: nurodo dvejetainės reikšmės teksto kodavimą. `encoding` reikšmę galima `null`. Numatytoji reikšmė yra `65001` (UTF-8).

Jei nurodytas `quoteStyle` įrašas (o `includeLineSeparators` ir `encoding` yra `null`), galima pateikti šiuos įrašų laukus:

-   `QuoteStyle`: nurodo, kaip apdorojami eilučių lūžiai su kabutėmis.
    -   `QuoteStyle.Csv`: eilučių lūžiai su kabutėmis laikomi duomenų dalimi, o ne dabartinės eilutės pabaiga.
    -   `QuoteStyle.None`: visi eilučių lūžiai laikomi dabartinės eilutės pabaiga, net kai jie įvyksta reikšmės su kabutėmis viduje. Ši reikšmė yra numatytoji, jei nenurodyta parinktis `CsvStyle`.
-   `CsvStyle`: nurodo, kaip apdorojamos kabutės. Negalima naudoti su `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: kabutės lauke yra reikšmingos tik iš karto po `skyriklio`.
    -   `CsvStyle.QuoteAlways`: kabutės lauke visada yra reikšmingos nepaisant jų vietos.
-   `Skyriklis`: vieno simbolio skyriklis. Galima naudoti tik su `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: nurodo, ar į tekstą įtraukti eilutės lūžio simbolius. Numatytoji reikšmė yra `false`.
-   `Kodavimas`: dvejetainės reikšmės teksto kodavimas. Numatytoji reikšmė yra `65001` (UTF-8).



## Category
Lines
