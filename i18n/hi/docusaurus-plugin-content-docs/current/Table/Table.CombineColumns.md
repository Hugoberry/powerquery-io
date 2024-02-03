---
title: Table.CombineColumns
---

# Table.CombineColumns


## Description

निर्दिष्ट संयोजक फ़ंक्शन का उपयोग करके निर्दिष्ट स्तंभों को एक नए स्तंभ में संयोजित करता है.


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

निर्दिष्ट संयोजक फ़ंक्शन का उपयोग करके निर्दिष्ट स्तंभों को एक नए स्तंभ में संयोजित करता है.


## Examples

### Example #1 
नए कालम में अंतिम और पहला नाम को अल्पविराम से पृथक करके संयोजित करें.
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
