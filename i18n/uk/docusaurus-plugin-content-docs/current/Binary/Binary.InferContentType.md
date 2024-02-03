---
title: Binary.InferContentType
---

# Binary.InferContentType


## Description

Читає двійковий потік, щоб визначити тип вмісту й відомості про формат потоку.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Details

Повертає запис із полем Content.Type, що містить виснуваний тип MIME.    Якщо виснувано тип вмісту text/\* і виявлено сторінку з кодами, додатково повертає поле Content.Encoding із даними про кодування потоку.    Якщо виснувано тип вмісту text/csv та формат із роздільниками, додатково повертає поле Csv.PotentialDelimiter з таблицею для аналізу можливих роздільників.    Якщо визначено тип вмісту text/csv та формат із полями фіксованої ширини, додатково повертає поле Csv.PotentialPositions зі списком для аналізу можливих позицій стовпців фіксованої ширини.



## Category
Binary
