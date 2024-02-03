---
title: Lines.FromText
---

# Lines.FromText


## Description

Tekstinė reikšmė konvertuojama į tekstinių reikšmių sąrašą, išskaidytą pagal eilučių lūžius. Jei includeLineSeparators reikšmė yra Teisinga, tada eilučių lūžio simboliai įtraukiami į tekstą.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Tekstinė reikšmė konvertuojama į tekstinių reikšmių sąrašą, išskaidytą pagal eilučių lūžius. Jei includeLineSeparators reikšmė yra Teisinga, tada eilučių lūžio simboliai įtraukiami į tekstą.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (numatytasis) kabučių naudojimo apibrėžti nereikia.</li>            <li><code>QuoteStyle.Csv:</code> kabutės naudojamos pagal CSV. Dvigubųjų kabučių simbolis naudojamas tokioms sritims atskirti, o dvigubųjų kabučių simbolių pora naudojama siekiant nurodyti vieną dvigubųjų kabučių simbolį toje srityje. </li>          </ul>        </div>    



## Category
Lines
