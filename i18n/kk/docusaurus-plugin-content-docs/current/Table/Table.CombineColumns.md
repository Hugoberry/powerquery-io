---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

Көрсетілген біріктіру функциясын пайдаланып көрсетілген бағандарды жаңа бағанға біріктіреді.


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

Көрсетілген біріктіру функциясын пайдаланып көрсетілген бағандарды жаңа бағанға біріктіреді.


## Examples

### Example #1 
Үтірмен бөлінген жаңа бағандағы фамилиялар мен есімдерді біріктіріңіз.
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
