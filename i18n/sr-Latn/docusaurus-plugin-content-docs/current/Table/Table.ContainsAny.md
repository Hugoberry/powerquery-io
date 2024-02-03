---
title: Table.ContainsAny
---

# Table.ContainsAny


## Description

Pokazuje da li se bilo koji navedeni zapis pojavljuje kao red u tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Pokazuje da li se bilo koji navedeni zapis sa liste zapisa <code>rows</code> pojavljuje kao red u <code>table</code>.    Može se navesti opcionalni parametar <code>equationCriteria</code> radi kontrole poređenja redova iz tabele.


## Examples

### Example #1 
Utvrđivanje da li tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; sadrži redove &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; ili &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Utvrđivanje da li tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; sadrži redove &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ili &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Utvrđivanje da li tabela &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; sadrži redove &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; ili &lt;code&gt;[a = 3, b = 5]&lt;/code&gt; poređenjem samo kolone [a].
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
