---
title: Lines.FromText
---

# Lines.FromText


## Description

Мәтіндік мәнді жол үзілімдерінде бөлінген мәтіндік мәндер тізіміне түрлендіреді. Егер includeLineSeparators шын болса, онды мәтінге жол үзілімі таңбалары қосылады.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Мәтін мәнін жол үзілімдерінде бөлінетін мәтін мәндерінің тізіміне түрлендіреді. Егер includeLineSeparators шын болса, жол үзілімі таңбалары мәтінде қамтылады.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (default) Тырнақшаға алу тәртібі қажет емес.</li>            <li><code>QuoteStyle.Csv:</code> Тырнақшаға алу Csv сәйкес болады. Қос тырнақша таңбасы мұндай аймақтардың шетін белгілеу үшін пайдаланылады және қос тырнақша таңбасының жұбы осындай аймақтағы бір қос тырнақша таңбасын көрсету үшін пайдаланылады. </li>          </ul>        </div>    



## Category
Lines
