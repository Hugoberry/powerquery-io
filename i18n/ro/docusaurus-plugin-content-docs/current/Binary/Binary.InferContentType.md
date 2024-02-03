---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Citește fluxul binar și încearcă să determine tipul de conținut și formatul informațiilor din flux.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Returnează o înregistrare cu câmpul Content.Type care conține tipul MIME dedus.    Dacă tipul de conținut dedus este text/\* și se detectează o pagină de cod de codificare, se returnează în plus și câmpul Content.Encoding, care conține codificarea fluxului.    Dacă tipul de conținut dedus este text/csv, iar formatul este delimitat, se returnează în plus câmpul Csv.PotentialDelimiter, care conține un tabel pentru analiza delimitatorilor potențiali.    Dacă tipul de conținut dedus este text/csv, iar formatul este lățime fixă, se returnează în plus și câmpul Csv.PotentialPositions, care conține o listă pentru analiza pozițiilor de coloane cu lățime fixă potențiale.



## Category
Binary
