---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Returnează poziţia sau poziţiile oricăruia dintre rândurile specificate în cadrul tabelului.


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

Returnează poziția sau pozițiile de rând din `table` ale primei ocurențe alei listei de `rows`. Returnează -1 dacă nu se găsește nicio ocurență.

-   `table`: tabelul de intrare.
-   `rows`: lista de rânduri din tabelul pentru care trebuie găsite pozițiile.
-   `occurrence`: *\[opțional\]* Specifică ce ocurențe ale rândului să se returneze.
-   `equationCriteria`: *\[opțional\]* Controlează comparația între rândurile tabelului.


## Examples

### Example #1
Găsiţi poziţia primei ocurenţe de \[a = 2, b = 4\] sau \[a = 6, b = 8\] în tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Găsiţi poziţia tuturor ocurenţelor de \[a = 2, b = 4\] sau \[a = 6, b = 8\] din tabelul `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
