---
title: Table.TransformRows
---

# Table.TransformRows


## Description

निर्दिष्ट ट्रांसफ़ॉर्म फ़ंक्शन का उपयोग करके तालिका की पंक्तियों को ट्रांसफ़ॉर्म करता है.


## Syntax

```powerquery
Table.TransformRows(
    table as table,
    transform as function
) as list
```


## Details

<code>table</code> की प्रत्येक पंक्ति में <code>transform</code> कार्रवाई लागू करके <code>सूची</code> बनाता है.


## Examples

### Example #1 
तालिका की पंक्तियों को संख्याओं की सूची में रूपांतरित करें.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    each [a]
)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```


### Example #2 
संख्यात्मक तालिका की पंक्तियों को पाठ अभिलेखों में रूपांतरित करें.
```powerquery
Table.TransformRows(
    Table.FromRecords({
        [a = 1],
        [a = 2],
        [a = 3],
        [a = 4],
        [a = 5]
    }),
    (row) as record => [B = Number.ToText(row[a])]
)
```

Result: 
```powerquery
{
    [B = "1"],
    [B = "2"],
    [B = "3"],
    [B = "4"],
    [B = "5"]
}
```




## Category
Table.Transformation
