---
title: Table.PositionOf
---

# Table.PositionOf


Vraća položaj ili položaje reda u okviru tabele.


## Syntax

```powerquery
Table.PositionOf(
    table as table,
    row as record,
    optional occurrence as any,
    optional equationCriteria as any
) as any
```


## Remarks

Vraća položaj reda prvog pojavljivanja za `row` u navedenom `table`. Vraća -1 ako se ne pronađe nijedno pojavljivanje.

-   `table`: Ulazna tabela..
-   `row`: Red iz tabele čiji položaj treba pronaći.
-   `occurrence`: *(opcionalno)* Navodi koja pojavljivanja reda treba vratiti.
-   `equationCriteria`: *(opcionalno)* Kontroliše poređenje redova iz tabele.


## Examples

### Example #1
Pronalaženje položaja prvog pojavljivanja za \[a = 2, b = 4\] u tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Pronalaženje položaja drugog pojavljivanja za \[a = 2, b = 4\] u tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Pronalaženje položaja svih pojavljivanja za \[a = 2, b = 4\] u tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
