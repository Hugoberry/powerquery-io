---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


तालिकाओं के स्तंभ को तालिकाओं के एकाधिक स्तंभों में एग्रीगेट करता है.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

<code>table</code>[<code>column</code>] की तालिकाओं को तालिकाओं के लिए एग्रीगेट मानों वाले एकाधिक स्तंभों में एग्रीगेट करता है. <code>aggregations</code> का उपयोग उन स्तंभों को निर्दिष्ट करने के लिए किया जाता है जिनमें एग्रीगेट करने के लिए तालिकाएँ, अपने मान जनरेट करने के लिए तालिकाओं पर लागू करने के लिए एग्रीगेट फ़ंक्शन और बनाने के लिए एग्रीगेट स्तंभों का नाम होता है.


## Examples

### Example #1 
तालिका &lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; में &lt;code&gt;[t]&lt;/code&gt; के तालिका स्तंभों को &lt;code&gt;[t.a]&lt;/code&gt; के योग, &lt;code&gt;[t.b]&lt;/code&gt; के अधिकतम तथा न्यूनतम और &lt;code&gt;[t.a]&lt;/code&gt; की संख्याओं की गणना को एग्रीगेट करें.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
