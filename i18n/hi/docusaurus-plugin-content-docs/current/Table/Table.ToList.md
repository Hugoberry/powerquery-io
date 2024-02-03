---
title: Table.ToList
---

# Table.ToList


## Description

तालिका में मानों की प्रत्येक पंक्ति पर निर्दिष्ट संयोजन फ़ंक्शन लागू करके तालिक को एक सूची में रूपांतरित करता है.


## Syntax

```powerquery
Table.ToList(
    table as table,
    optional combiner as function
) as list
```


## Details

तालिका में मानों की प्रत्येक पंक्ति पर निर्दिष्ट संयोजन फ़ंक्शन लागू करके तालिक को एक सूची में रूपांतरित करता है.


## Examples

### Example #1 
प्रत्येक पंक्ति के पाठ को अर्द्धविराम के साथ संयोजित करें.
```powerquery
Table.ToList(
    Table.FromRows({
        {Number.ToText(1), "Bob", "123-4567"},
        {Number.ToText(2), "Jim", "987-6543"},
        {Number.ToText(3), "Paul", "543-7890"}
    }),
    Combiner.CombineTextByDelimiter(",")
)
```

Result: 
```powerquery
{"1,Bob,123-4567", "2,Jim,987-6543", "3,Paul,543-7890"}
```




## Category
Table.Conversions
