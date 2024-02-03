---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Anger om någon av de angivna posterna visas som rader i tabellen.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Anger om någon av de angivna posterna i listan med poster, <code>rows</code>, visas som rader i <code>table</code>.    En valfri parameter, <code>equationCriteria</code>, kan anges för att hantera jämförelsen mellan raderna i tabellen.


## Examples

### Example #1 
Kontrollera om tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; innehåller raderna &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 2],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
true
```


### Example #2 
Kontrollera om tabellen &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; innehåller raderna &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    }
)
```

Result: 
```powerquery
false
```


### Example #3 
Kontrollera om tabellen &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; innehåller raderna &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; eller &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; genom att bara jämföra kolumnen [a].
```powerquery
Table.ContainsAny(
    Table.FromRecords({
        [a = 1, b = 2],
        [a = 3, b = 4]
    }),
    {
        [a = 1, b = 3],
        [a = 3, b = 5]
    },
    "a"
)
```

Result: 
```powerquery
true
```




## Category
Table.Membership
