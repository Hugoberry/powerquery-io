---
title: Table.Pivot
---

# Table.Pivot


## Description

Używając pary kolumn reprezentujących pary atrybut-wartość, obraca dane w kolumnie atrybutów tak, że stają się one nagłówkami kolumn.


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

Używając pary kolumn reprezentujących pary atrybut-wartość, obraca dane w kolumnie atrybutów tak, że stają się one nagłówkami kolumn.


## Examples

### Example #1 
Weź wartości „a”, „b” i „c” z kolumny atrybutów tabeli &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; i przestaw je do ich własnej kolumny.
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
Weź wartości „a”, „b” i „c” z kolumny atrybutów tabeli &lt;code&gt;(\{ [ key = &#34;x&#34;, attribute = &#34;a&#34;, value = 1 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 3 ], [ key = &#34;x&#34;, attribute = &#34;c&#34;, value = 5 ], [ key = &#34;y&#34;, attribute = &#34;a&#34;, value = 2 ], [ key = &#34;y&#34;, attribute = &#34;b&#34;, value = 4 ] })&lt;/code&gt; i przestaw je do ich własnej kolumny.  Z atrybutem „c” klucza „x” jest skojarzonych wiele wartości, więc użyj funkcji List.Max w celu rozwiązania konfliktu.
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
