---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Vraća položaj ili položaje bilo kog navedenog reda u okviru tabele.


## Syntax

```powerquery
Table.PositionOfAny(
    table as table,
    rows as list,
    optional occurrence as number,
    optional equationCriteria as any
) as any
```


## Remarks

Vraća položaje redova iz `table` za prvo pojavljivanje liste sa `rows`. Vraća -1 ako se ne pronađe nijedno pojavljivanje.

-   `table`: Ulazna tabela..
-   `rows`: Lista redova iz tabele čiji položaj treba pronaći.
-   `occurrence`: *(opcionalno)* Navodi koja pojavljivanja reda treba vratiti.
-   `equationCriteria`: *(opcionalno)* Kontroliše poređenje redova iz tabele.


## Examples

### Example #1
Pronalaženje položaja prvog pojavljivanja za \[a = 2, b = 4\] ili \[a = 6, b = 8\] u tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Pronalaženje položaja svih pojavljivanja za \[a = 2, b = 4\] ili \[a = 6, b = 8\] u tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
