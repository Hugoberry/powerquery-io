---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Prebere dvojiški tok ter poskusi določiti vrsto vsebine in oblikovati informacije toka.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Vrne zapis s poljem "Content.Type", ki vsebuje izpeljano vrsto MIME.    Če je izpeljana vrsta vsebine "besedilo/\*" in je zaznana kodna stran za kodiranje, vrne tudi polje "Content.Encoding", ki vsebuje kodiranje toka.    Če je izpeljana vrsta vsebine "besedilo/csv" in je oblika zapisa ločena z ločilom, vrne tudi polje "Csv.PotentialDelimiter", ki vsebuje tabelo za analizo morebitnih ločil.    Če je izpeljana vrsta vsebine "besedilo/csv" in je oblika zapisa fiksne širine, vrne tudi polje "Csv.PotentialPositions", ki vsebuje seznam za analizo morebitnih mest stolpcev s fiksno širino.



## Category
Binary
