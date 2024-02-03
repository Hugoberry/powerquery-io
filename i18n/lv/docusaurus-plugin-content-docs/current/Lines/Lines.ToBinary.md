---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Teksta vērtību saraksts tiek pārvērsts binārā vērtībā, izmantojot norādīto kodējumu un parametra lineSeparator vērtību. Norādītā parametra lineSeparator vērtība tiek pievienota katras rindiņas beigās.  Ja šī vērtība nav norādīta, tiek izmantotas rakstatgriezes un rindiņas padeves rakstzīmes.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Teksta vērtību saraksts tiek pārvērsts binārā vērtībā, izmantojot norādīto kodējumu un parametra lineSeparator vērtību. Norādītā parametra lineSeparator vērtība tiek pievienota katras rindiņas beigās.  Ja šī vērtība nav norādīta, tiek izmantotas rakstatgriezes un rindiņas padeves rakstzīmes.



## Category
Lines
