---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


## Description

Įrašų stulpelis arba lentelių stulpelis išplečiamas į kelis stulpelius esančioje lentelėje.


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

<code>table</code>[<code>column</code>] lentelės išplečiamos į kelias eilutes ir stulpelius. <code>columnNames</code> naudojamas norint pasirinkti iš vidinės lentelės norimus išplėsti stulpelius. Nurodykite <code>newColumnNames</code>, jei norite išvengti esamų ir naujų stulpelių nesuderinamumo.


## Examples

### Example #1 
Išplėskite &lt;code&gt;[a]&lt;/code&gt; lentelės stulpelius lentelėje &lt;code&gt;(\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})&lt;/code&gt; į 3 stulpelius &lt;code&gt;[t.a]&lt;/code&gt;, &lt;code&gt;[t.b]&lt;/code&gt; ir &lt;code&gt;[t.c]&lt;/code&gt;.
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
