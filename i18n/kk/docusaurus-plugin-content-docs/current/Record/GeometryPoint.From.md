---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Бөліктерден геометриялық нүктені білдіретін жазба құрылымын жасайды.


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

X координатасы, Y координатасы, бар болса, Z координатасы және өлшем (M) сияқты құрамдас бөліктерінен географиялық нүктені білдіретін жазба құрылымын жасайды. Қосымша кеңістіктік сілтеме идентификаторы (SRID), әдепкі мәннен (0) өзгеше болса, берілуі мүмкін.



## Category
Record.Serialization
