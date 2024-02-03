---
title: Table.TransformColumnTypes
---

# Table.TransformColumnTypes


## Description

Белгілі бір мәдениетті пайдаланып, \{ column, type } түріндегі түр түрлендіру(лер)ін қолданады.


## Syntax

```powerquery
Table.TransformColumnTypes(
    table as table,
    typeTransformations as list,
    optional culture as text
) as table
```


## Details

<code>typeTransformations</code> (мұндағы пішім — \{ column name, type name}) параметрінде көрсетілген бағандарға түрлендіру әрекетін қолдану арқылы, <code>culture</code> параметрінде көрсетілген мәдениетті (мысалы, "en-US") пайдаланып, кіріс <code>table</code> ішінен кестені қайтарады.    Егер баған жоқ болса, ерекшелік жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
[a] бағанындағы сандық мәндерді &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; кестесінен алынған мәтіндік мәндерге түрлендіру.
```powerquery
Table.TransformColumnTypes(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {"a", type text},
    "en-US"
)
```

Result: 
```powerquery
Table.FromRecords({
    [a = "1", b = 2],
    [a = "3", b = 4]
})
```




## Category
Table.Transformation
