---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Obavlja spajanje tabela na navedenim kolonama i daje rezultat spajanja u novoj koloni.


## Syntax

```powerquery
Table.AddJoinColumn(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text
) as table
```


## Remarks

Spaja redove iz `table1` sa redovima iz `table2` na osnovu jednakosti vrednosti iz kolona ključa koje bira `key1` (za `table1`) i `key2` (za `table2`). Rezultati se unose u kolonu `newColumnName`. Ova funkcija se ponaša slično kao Table.Join sa JoinKind iz LeftOuter, osim što se rezultati spajanja predstavljaju ugnežđeno, a ne ravno.


## Examples

### Example #1
Dodavanje kolone za spajanje u (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) po imenu „cena/zalihe“ iz tabele (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}) spojene na \[saleID\].
```powerquery
Table.AddJoinColumn(
    Table.FromRecords({
        [saleID = 1, item = "Shirt"],
        [saleID = 2, item = "Hat"]
    }),
    "saleID",
    () => Table.FromRecords({
        [saleID = 1, price = 20, stock = 1234],
        [saleID = 2, price = 10, stock = 5643]
    }),
    "saleID",
    "price"
)
```

Result: 
```powerquery
Table.FromRecords({
    [
        saleID = 1,
        item = "Shirt",
        price = Table.FromRecords({[saleID = 1, price = 20, stock = 1234]})
    ],
    [
        saleID = 2,
        item = "Hat",
        price = Table.FromRecords({[saleID = 2, price = 10, stock = 5643]})
    ]
})
```




## Category
Table.Transformation
