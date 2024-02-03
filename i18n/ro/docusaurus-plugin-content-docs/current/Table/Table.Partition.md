---
title: Table.Partition
---

# Table.Partition


## Description

Partiţionează tabelul într-o listă de tabele în funcţie de numărul de grupuri şi de coloana specificată.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Partiţionează <code>table</code> într-o listă de <code>groups</code> număr de tabele, în funcţie de valoarea <code>column</code> şi de o funcţie <code>hash</code>.    Funcţia <code>hash</code> este aplicată valorii rândului <code>column</code> pentru a obţine o valoare hash pentru rând. Valoarea hash modulo <code>groups</code> determină în care dintre tabelele returnate va fi plasat rândul.    <ul>       <li><code>table</code>: Tabelul de partiţionat.</li>       <li><code>column</code>: Coloana pe care se va aplica algoritmul hash pentru a determina în ce tabel returnat se află rândul.</li>       <li><code>groups</code>: Numărul de tabele în care va fi partiţionat tabelul de intrare.</li>       <li><code>hash</code>: Funcţia aplicată pentru a obţine o valoare hash.</li>    </ul>  


## Examples

### Example #1 
Partiţionaţi tabelul &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; în 2 tabele pe coloana [a], utilizând valoarea coloanelor ca funcţie hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
