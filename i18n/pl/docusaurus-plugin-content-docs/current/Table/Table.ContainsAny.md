---
title: Table.ContainsAny
---

# Table.ContainsAny


Wskazuje, czy dowolny z określonych rekordów występuje jako wiersz w tabeli.


## Syntax

```powerquery
Table.ContainsAny(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Wskazuje, czy dowolny z rekordów określonych na liście rekordów <code>rows</code> występuje jako wiersz w tabeli <code>table</code>.    Opcjonalny parametr <code>equationCriteria</code> można określić, aby sterować porównywaniem wierszy tabeli.


## Examples

### Example #1 
Ustal, czy tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; zawiera wiersz &lt;code&gt;[a = 1, b = 2]&lt;/code&gt; lub &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Ustal, czy tabela &lt;code&gt;(\{[a = 1, b = 2], [a = 3, b = 4]})&lt;/code&gt; zawiera wiersz &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; lub &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;.
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
Ustal, czy tabela &lt;code&gt;(Table.FromRecords(\{[a = 1, b = 2], [a = 3, b = 4]}))&lt;/code&gt; zawiera wiersz &lt;code&gt;[a = 1, b = 3]&lt;/code&gt; lub &lt;code&gt;[a = 3, b = 5]&lt;/code&gt;, porównując tylko wartości w kolumnie [a].
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
