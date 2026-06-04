---
title: Table.PositionOf
---

# Table.PositionOf


Vrne položaj ali položaje vrstice v tabeli.


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

Vrne položaj vrstice za prvo pojavitev vrstice `row` v navedeni tabeli `table`. Vrne –1, če ni najdena nobena pojavitev.

-   `table`: vhodna tabela.
-   `row`: vrstica v tabeli, za katero bo poiskan položaj.
-   `occurrence`: *(Izbirno)* določa, katere pojavitve vrstice bodo vrnjene.
-   `equationCriteria`: *(Izbirno)* nadzoruje primerjavo med vrsticami tabele.


## Examples

### Example #1
Poiščite položaj prve pojavitve vrstice \[a = 2, b = 4\] v tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Poiščite položaj druge pojavitve vrstice \[a = 2, b = 4\] v tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Poiščite položaj vseh pojavitev vrstice \[a = 2, b = 4\] v tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
