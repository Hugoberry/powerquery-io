---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Преобразует список текстовых значений в двоичное значение с использованием указанной кодировки и разделителя lineSeparator. Указанный lineSeparator добавляется к каждой строке.  Если разделитель не указан, используются символы возврата каретки и перевода строки.


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

Преобразует список текстовых значений в двоичное значение с использованием указанной кодировки и разделителя lineSeparator. Указанный lineSeparator добавляется к каждой строке.  Если разделитель не указан, используются символы возврата каретки и перевода строки.



## Category
Lines
