---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Restituisce la posizione o le posizioni della riga all&#39;interno della tabella.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Details

Restituisce la posizione della riga della prima occorrenza di <code>row</code> in <code>table</code>. Restituisce -1 se non viene trovata alcuna occorrenza.    <ul>       <li><code>table</code>: tabella di input.</li>       <li><code>row</code>: riga nella tabella di cui trovare la posizione.</li>       <li><code>occurrence</code>: <i>[facoltativo]</i> specifica le occorrenze della riga da restituire.</li>       <li><code>equationCriteria</code>: <i>[facoltativo]</i> controlla il confronto tra le righe di tabella.</li>    </ul>    


## Examples

### Example #1 
Trovare la posizione della prima occorrenza di [a = 2, b = 4] nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4]
)
```

Result: 
```powerquery
0
```


### Example #2 
Trovare la posizione della seconda occorrenza di [a = 2, b = 4] nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    1
)
```

Result: 
```powerquery
2
```


### Example #3 
Trovare la posizione di tutte le occorrenze di [a = 2, b = 4] nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOf(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    [a = 2, b = 4],
    Occurrence.All
)
```

Result: 
```powerquery
{0, 2}
```




## Category
Table.Membership
