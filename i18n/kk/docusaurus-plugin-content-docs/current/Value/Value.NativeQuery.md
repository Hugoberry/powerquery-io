---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Сұрауды мақсаты бойынша бағалайды.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

<code>parameters</code> және <code>options</code> ішінде көрсетілген параметрлерді пайдалана отырып, <code>target</code> бойынша <code>query</code> есептейді.<br />Сұраудың шығыс деректері <code>target</code> арқылы анықталады.<br /><code>target</code> <code>query</code> сипатталған операция үшін контекст береді.<br /><code>query</code> <code>target</code> ішінде орындалатын сұрауды сипаттайды. <code>query</code> әдетте <code>target</code> сияқты көрсетіледі (мысалы, T-SQL нұсқауы).<br />Міндетті емес <code>parameters</code> мәні <code>query</code> тарапынан күтілетін параметр мәндерін қамтамасыз етуге арналған сәйкес тізімді немесе жазбаны қамтуы мүмкін.<br />Міндетті емес <code>options</code> жазбасы <code>target</code> бойынша <code>query</code> орындайтын әрекетке әсер ететін параметрлерді қамтуы мүмкін. Бұл параметрлер <code>target</code> қатысты.<br />



## Category
Values
