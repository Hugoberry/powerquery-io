---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Yhdistää määritetyt sarakkeet uudeksi sarakkeeksi käyttäen määritettyä yhdistämistoimintofunktiota.


## Syntax

```powerquery
Table.CombineColumns(
    table as table,
    sourceColumns as list,
    combiner as function,
    column as text
) as table
```


## Details

Yhdistää määritetyt sarakkeet uudeksi sarakkeeksi käyttäen määritettyä yhdistämistoimintofunktiota.


## Examples

### Example #1 
Yhdistä suku- ja etunimet uuteen sarakkeeseen pilkuilla eroteltuina.
```powerquery
Table.CombineColumns(
    Table.FromRecords({[FirstName = "Bob", LastName = "Smith"]}),
    {"LastName", "FirstName"},
    Combiner.CombineTextByDelimiter(",", QuoteStyle.None),
    "FullName"
)
```

Result: 
```powerquery
Table.FromRecords({[FullName = "Smith,Bob"]})
```




## Category
Table.Transformation
