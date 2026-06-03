---
title: Table.Pivot
---

# Table.Pivot


विशेषता-मान युग्मों का प्रतिनिधित्व कर रहे स्तंभों का दिया गया युग्म, विशेषता स्तंभ के डेटा को स्तंभ शीर्षकों में घुमाता है.


## Syntax

```powerquery
Table.Pivot(
    table as table,
    pivotValues as list,
    attributeColumn as text,
    valueColumn as text,
    optional aggregationFunction as function
) as table
```


## Remarks

विशेषता-मान युग्मों का प्रतिनिधित्व कर रहे स्तंभों का दिया गया युग्म, विशेषता स्तंभ के डेटा को स्तंभ शीर्षकों में घुमाता है.


## Examples

### Example #1
तालिका `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` के विशेषता स्तंभ में "a", "b" और "c" मानों को ले जाएँ और उन्हें उनके अपने स्तंभ में पिवट करें.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 3],
    [key = "y", a = 2, b = 4, c = null]
})
```


### Example #2
तालिका `({ [ key = "x", attribute = "a", value = 1 ], [ key = "x", attribute = "c", value = 3 ], [ key = "x", attribute = "c", value = 5 ], [ key = "y", attribute = "a", value = 2 ], [ key = "y", attribute = "b", value = 4 ] })` के विशेषता स्तंभ में "a", "b" और "c" मानों को ले जाएँ और उन्हें उनके अपने स्तंभ में पिवट करें. कुंजी "x" के लिए विशेषता "c" में उससे संबद्ध एकाधिक मान हैं, इसलिए विरोध को हल करने के लिए फ़ंक्शन List.Max का उपयोग करें.
```powerquery
Table.Pivot(
    Table.FromRecords({
        [key = "x", attribute = "a", value = 1],
        [key = "x", attribute = "c", value = 3],
        [key = "x", attribute = "c", value = 5],
        [key = "y", attribute = "a", value = 2],
        [key = "y", attribute = "b", value = 4]
    }),
    {"a", "b", "c"},
    "attribute",
    "value",
    List.Max
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", a = 1, b = null, c = 5],
    [key = "y", a = 2, b = 4, c = null]
})
```




## Category
Table.Column operations
