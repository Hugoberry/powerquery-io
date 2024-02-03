---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Tiek atgriezta tabula ar kolonnām, kas līdzeklī Common Data Model ir kartētas atbilstoši elementa atribūtiem, tostarp datu tipiem.


## Syntax

```powerquery
Cdm.MapToEntity(
    table as table,
    columnDefinitions as any,
    optional defaultType as type,
    optional defaultCdmClass as text
) as table
```


## Details

Tiek atgriezta tabula ar kolonnām, kas līdzeklī Common Data Model ir kartētas atbilstoši elementa atribūtiem, tostarp datu tipiem. Ja elementa definīcijas kolonnas netiks kartētas, tās tiks pievienotas, un jebkuras nekartētās kolonnas tiks noņemtas.


