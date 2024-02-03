---
title: Lines.FromBinary
---

# Lines.FromBinary


## Description

Bināra vērtība tiek pārvērsta par teksta vērtību sarakstu, kas ir sadalīts atbilstoši rindiņu pārtraukumiem. Ja ir norādīts pēdiņu stils, rindiņu pārtraukumi var tikt rādīti pēdiņās. Ja parametra includeLineSeparators vērtība ir True, rindiņu pārtraukuma rakstzīmes tiek ietvertas tekstā.


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

Bināra vērtība tiek pārvērsta par teksta vērtību sarakstu, kas ir sadalīts atbilstoši rindiņu pārtraukumiem. Ja ir norādīts pēdiņu stils, rindiņu pārtraukumi var tikt rādīti pēdiņās. Ja parametra includeLineSeparators vērtība ir True, rindiņu pārtraukuma rakstzīmes tiek ietvertas tekstā.



## Category
Lines
