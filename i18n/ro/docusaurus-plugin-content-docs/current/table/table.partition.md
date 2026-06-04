---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Partiţionează `table` într-o listă de `groups` număr de tabele, în funcţie de valoarea `column` şi de o funcţie `hash`. Funcţia `hash` este aplicată valorii rândului `column` pentru a obţine o valoare hash pentru rând. Valoarea hash modulo `groups` determină în care dintre tabelele returnate va fi plasat rândul.

-   `table`: Tabelul de partiţionat.
-   `column`: Coloana pe care se va aplica algoritmul hash pentru a determina în ce tabel returnat se află rândul.
-   `groups`: Numărul de tabele în care va fi partiţionat tabelul de intrare.
-   `hash`: Funcţia aplicată pentru a obţine o valoare hash.


## Examples

### Example #1
Partiţionaţi tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` în 2 tabele pe coloana \[a\], utilizând valoarea coloanelor ca funcţie hash.
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
