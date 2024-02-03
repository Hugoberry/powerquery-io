---
title: Table.PositionOfAny
---

# Table.PositionOfAny


## Description

Restituisce la posizione o le posizioni di una delle righe specificate all&#39;interno della tabella.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Details

Restituisce le posizioni delle righe da <code>table</code> della prima occorrenza dell'elenco di <code>rows</code>. Restituisce -1 se non viene trovata alcuna occorrenza.    <ul>    <li><code>table</code>: tabella di input.</li>       <li><code>rows</code>: elenco di righe nella tabella di cui trovare le posizioni.</li>       <li><code>occurrence</code>: <i>[facoltativo]</i> specifica le occorrenze della riga da restituire.</li>       <li><code>equationCriteria</code>: <i>[facoltativo]</i> controlla il confronto tra le righe di tabella.</li>    </ul>    


## Examples

### Example #1 
Trovare la posizione della prima occorrenza di [a = 2, b = 4] o [a = 6, b = 8] nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    }
)
```

Result: 
```powerquery
0
```


### Example #2 
Trovare la posizione di tutte le occorrenze di [a = 2, b = 4] o [a = 6, b = 8] nella tabella &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}&lt;/code&gt;.
```powerquery
Table.PositionOfAny(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 6, b = 8],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    {
        [a = 2, b = 4],
        [a = 6, b = 8]
    },
    Occurrence.All
)
```

Result: 
```powerquery
{0, 1, 2}
```




## Category
Table.Membership
