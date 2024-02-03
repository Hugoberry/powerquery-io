---
title: Table.Unpivot
---

# Table.Unpivot


## Description

तालिका में स्तंभों के सेट को विशेषता-मान युग्मों में परिवर्तित करता है.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Details

तालिका में स्तंभों के सेट को प्रत्येक पंक्ति में शेष मानों के साथ संयजित किए गए विशेषता-मान युग्मों में परिवर्तित करता है.


## Examples

### Example #1 
स्तंभ &#34;a&#34;, &#34;b&#34; और &#34;c&#34; को तालिका &lt;code&gt;(\{[ key = &#34;x&#34;, a = 1, b = null, c = 3 ], [ key = &#34;y&#34;, a = 2, b = 4, c = null ]})&lt;/code&gt; में ले जाएँ और उन्हें विशेषता-मान युग्मों में अनपिवट करें.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
