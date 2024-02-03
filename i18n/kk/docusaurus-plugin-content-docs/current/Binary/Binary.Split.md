---
title: Binary.Split
---

# Binary.Split


## Description

Көрсетілген бет өлшемін пайдаланып, көрсетілген екілік файлдарды екілік файлдар тізіміне бөледі.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

<code>binary</code> жазбаларын екілік файлдар тізіміне бөледі, онда шығыс тізімнің бірінші элементі –     бастапқы екілік файлдан алынған алғашқы <code>pageSize</code> байттан тұратын екілік файл. Шығыс тізімнің келесі элементі – бастапқы екілік файлдан алынған келесі <code>pageSize</code> байттан тұратын екілік файл. Солай жалғаса береді.



## Category
Binary
