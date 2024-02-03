---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


## Description

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


## Details

Spaja redove iz <code>table1</code> sa redovima iz <code>table2</code> na osnovu jednakosti vrednosti iz kolona ključa koje bira <code>key1</code> (za <code>table1</code>) i <code>key2</code> (za <code>table2</code>). Rezultati se unose u kolonu <code>newColumnName</code>.Ova funkcija se ponaša slično kao Table.Join sa JoinKind iz LeftOuter, osim što se rezultati spajanja predstavljaju ugnežđeno, a ne ravno.


## Examples

### Example #1 
Dodavanje kolone za spajanje u (\{[saleID = 1, item = &#34;Shirt&#34;], [saleID = 2, item = &#34;Hat&#34;]}) po imenu „cena/zalihe“ iz tabele (\{[saleID = 1, price = 20], [saleID = 2, price = 10]}) spojene na [saleID].
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
