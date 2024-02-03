---
title: Table.PositionOf
---

# Table.PositionOf


## Description

Retorna la posició o les posicions de la fila dins de la taula.


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

Retorna la posició de fila de la primera aparició de la <code>row</code> a la <code>table</code> especificada. Retorna -1 si no es troba cap aparició.    <ul>       <li><code>table</code>: taula d'entrada.</li>       <li><code>row</code>: fila de la taula de la qual se cercarà la posició.</li>       <li><code>occurrence</code>: <i>[Opcional]</i> Especifica quines aparicions de la fila es retornaran.</li>       <li><code>equationCriteria</code>: <i>[opcional]</i> Controla la comparació entre les files de la taula.</li>    </ul>    


## Examples

### Example #1 
Troba la posició de la primera aparició de [a = 2, b = 4] a la taula &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Troba la posició de la segona aparició de [a = 2, b = 4] a la taula &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
Troba la posició de totes les aparicions de [a = 2, b = 4] a la taula &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt;.
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
