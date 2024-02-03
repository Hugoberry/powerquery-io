---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Indica se uno dei record specificati viene visualizzato come riga nella tabella.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Indica se uno dei record specificati nell'elenco di record <code>rows</code> viene visualizzato come riga in <code>table</code>.    Facoltativamente, è possibile specificare il parametro <code>equationCriteria</code> per controllare il confronto tra le righe della tabella.


## Examples

### Example #1 
Determinare se la tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contiene le righe &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinare se la tabella &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; contiene le righe &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Determinare se la tabella &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; contiene le righe &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; o &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; confrontando solo la colonna [a].
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
