---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

तालिकाओं के स्तंभ को तालिकाओं के एकाधिक स्तंभों में एग्रीगेट करता है.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Details

<code>table</code>[<code>column</code>] की तालिकाओं को एकाधिक पंक्तियों और स्तंभों में विभाजित करता है. आंतरिक तालिका से विस्तृत करने के लिए स्तंभों का चयन करने हेतु <code>columnNames</code> का उपयोग किया जाता है. मौजूदा स्तंभों और नए स्तंभों के बीच विरोध से बचने के लिए <code>newColumnNames</code> निर्दिष्ट करें.


## Examples

### Example #1 
तालिका &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; में मौजूद &lt;code&gt;[a]&lt;/code&gt; के तालिका स्तंभों को 3 स्तंभों &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; और &lt;code&gt;[t.c]&lt;/code&gt; में विस्तृत करें.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
