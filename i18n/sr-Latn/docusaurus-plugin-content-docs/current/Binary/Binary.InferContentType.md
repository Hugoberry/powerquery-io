---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Čita binarni tok i pokušava da utvrdi tip sadržaja i informacije o formatu toka.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Vraća zapis sa poljem Content.Type koje sadrži utvrđeni MIME tip.    Ako je utvrđeni tip sadržaja tekst/\* i ako se otkrije kodna stranica za kodiranje, vraća i polje Content.Encoding, koje sadrži kodiranje toka.    Ako je utvrđeni tip sadržaja tekst/csv, a format je razgraničen, vraća i polje Csv.PotentialDelimiter, koje sadrži tabelu za analizu potencijalnih znakova za razgraničavanje.    Ako je utvrđeni tip sadržaja tekst/csv, a format je fiksne širine, vraća i polje Csv.PotentialPositions, koje sadrži listu za analizu potencijalnih položaja kolona fiksne širine.



## Category
Binary
