---
title: Binary.Split
---

# Binary.Split


## Description

Разделяет указанный двоичный файл на список двоичных файлов с заданным размером страницы.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

Разделяет <code>binary</code> на список двоичных файлов, где первый элемент выходного списка — двоичный файл с первыми байтами (<code>pageSize</code>) из    исходного двоичного файла, следующий элемент выходного списка — двоичный файл со следующими байтами (<code>pageSize</code>) из исходного двоичного файла и т. д.



## Category
Binary
