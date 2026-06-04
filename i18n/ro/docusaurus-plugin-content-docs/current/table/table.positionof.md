---
title: Table.PositionOf
---

# Table.PositionOf


Returnează poziţia sau poziţiile rândului în cadrul tabelului.


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

Returnează poziția de rând a primei ocurențe a `row` în `table` specificat. Returnează -1 dacă nu se găsește nicio ocurență.

-   `table`: tabelul de intrare.
-   `row`: rândul din tabelul pentru care trebuie găsită poziția.
-   `occurrence`: *\[opțional\]* Specifică ce ocurențe ale rândului să se returneze.
-   `equationCriteria`: *\[opțional\]* Controlează comparația între rândurile tabelului.


## Examples

### Example #1
Găsiţi poziţia primei ocurenţe de \[a = 2, b = 4\] în tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Găsiţi poziţia celei de-a doua ocurenţe de \[a = 2, b = 4\] în tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Găsiţi poziţia tuturor ocurenţelor de \[a = 2, b = 4\] din tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
