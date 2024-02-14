---
title: Binary.InferContentType
---

# Binary.InferContentType


Считывает двоичный поток, пытается определить тип содержимого и сведения о формате потока.


## Syntax

```powerquery
Binary.InferContentType(
    source as binary
) as record
```


## Remarks

Возвращает запись с полем Content.Type, содержащим предполагаемый тип MIME.    Если предполагаемый тип содержимого — text/\* и обнаружена страница кодировки, дополнительно возвращает поле Content.Encoding, содержащее кодировку потока.    Если предполагаемый тип содержимого — text/csv с разделителями, дополнительно возвращает поле Csv.PotentialDelimiter, содержащее таблицу для анализа потенциальных разделителей.    Если предполагаемый тип содержимого — text/csv с фиксированной шириной, дополнительно возвращает поле Csv.PotentialPositions, содержащее список для анализа потенциальных позиций столбцов с фиксированной шириной.



## Category
Binary