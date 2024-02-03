---
title: Cdm.MapToEntity
---

# Cdm.MapToEntity


## Description

Деректер түрлерін қоса алғанда, Common Data Model жүйесіндегі нысанның атрибуттарымен байланыстырылған бағандар бар кестені қайтарады.


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

Деректер түрлерін қоса алғанда, Common Data Model жүйесіндегі нысанның атрибуттарымен байланыстырылған бағандар бар кестені қайтарады. Егер байланыстырылмаған болса, нысан анықтамасынан алынған бағандар қосылады және байланыстырылмаған бағандар жойылады.


