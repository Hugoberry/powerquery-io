---
title: Table.Pivot
---

# Table.Pivot


## Description

Төлсипат-мән жұптарын білдіретін бағандар жұбы берілген болса, төлсипат бағанындағы деректерді баған тақырыптарына бұрады.


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


## Details

Төлсипат-мән жұптарын білдіретін бағандар жұбы берілген болса, төлсипат бағанындағы деректерді баған тақырыптарына бұрады.


## Examples

### Example #1 
&lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; кестесінің төлсипат бағанындағы &#34;a&#34;, &#34;b&#34; және &#34;c&#34; мәндерін алу және оларды өз бағанына орналастыру.
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
&lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 5 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; кестесінің төлсипат бағанындағы &#34;a&#34;, &#34;b&#34; және &#34;c&#34; мәндерін алу және оларды өз бағанына орналастыру.  &#34;x&#34; кілтінің &#34;c&#34; төлсипатымен бірнеше мән байланысты, сондықтан қайшылықты шешу үшін List.Max функциясын пайдаланыңыз.
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
