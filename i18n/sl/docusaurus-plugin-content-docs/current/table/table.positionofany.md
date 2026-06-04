---
title: Table.PositionOfAny
---

# Table.PositionOfAny


Vrne položaj ali položaje katere koli navedene vrstice v tabeli.


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

Vrne položaje vrstic iz tabele `table` za prvo pojavitev seznama vrstic `rows`. Vrne –1, če ni najdena nobena pojavitev.

-   `table`: vhodna tabela.
-   `rows`: seznam vrstic v tabeli, za katere bodo poiskani položaji.
-   `occurrence`: *(Izbirno)* določa, katere pojavitve vrstice bodo vrnjene.
-   `equationCriteria`: *(Izbirno)* nadzoruje primerjavo med vrsticami tabele.


## Examples

### Example #1
Poiščite položaj prve pojavitve vrstice \[a = 2, b = 4\] ali \[a = 6, b = 8\] v tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})`.
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
Poiščite položaj vseh pojavitev vrstice \[a = 2, b = 4\] ali \[a = 6, b = 8\] v tabeli `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]}`.
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
