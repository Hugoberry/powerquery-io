---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Бөліктерден географиялық нүктені көрсететін жазба жасайды.


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

Бойлық, ендік және бар болса, биіктік (Z) және өлшем (M) сияқты құрамдас бөліктерінен географиялық нүктені білдіретін жазба құрылымын жасайды. Қосымша кеңістіктік сілтеме идентификаторы (SRID) әдепкі мәннен (4326) өзгеше болса, берілуі мүмкін.



## Category
Record.Serialization
