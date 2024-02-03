---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Čte binární stream a pokouší se určit informace o typu obsahu a formátu streamu.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Vrátí záznam s polem Content.Type, které obsahuje odvozený typ MIME.    Pokud je odvozený typ obsahu text/\* a je zjištěna znaková stránka pro kódování, je navíc vráceno pole Content.Encoding, které obsahuje kódování streamu.    Pokud je odvozený typ obsahu text/csv a formát je delimited, je navíc vráceno pole Csv.PotentialDelimiter obsahující tabulku pro analýzu, co mohou být oddělovače.    Pokud je odvozený typ obsahu text/csv a formát je fixed-width, je navíc vráceno pole Csv.PotentialPositions obsahující seznam pro analýzu možných pozic sloupců s pevnou šířkou.



## Category
Binary
