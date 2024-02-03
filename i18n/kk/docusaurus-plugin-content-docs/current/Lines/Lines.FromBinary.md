---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Екілік мәнді жол үзілімдерінде бөлінген мәтіндік мәндер тізіміне түрлендіреді.  Егер тырнақша мәнері көрсетілген болса, онда жол үзілімдері тырнақшалар ішінде көрсетілуі мүмкін.  Егер includeLineSeparators шын болса, онда мәтінге жол үзілімі таңбалары қосылады.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Details

Екілік мәнді жол үзілімдерінде бөлінген мәтіндік мәндер тізіміне түрлендіреді.  Егер тырнақша мәнері көрсетілген болса, онда жол үзілімдері тырнақшалар ішінде көрсетілуі мүмкін.  Егер includeLineSeparators шын болса, онда мәтінге жол үзілімі таңбалары қосылады.



## Category
Lines
