---
title: Table.AddJoinColumn
---

# Table.AddJoinColumn


Združi tabele v podanih stolpcih in vrne rezultat združevanja v novem stolpcu.


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

Združi vrstice tabele `table1` z vrsticami tabele `table2` glede na enakost vrednosti stolpcev s ključem, ki jih izbereta `key1` (za `table1`) in `key2` (za `table2`). Rezultati so vneseni v stolpec z imenom `newColumnName`. Ta funkcija deluje podobno kot funkcija"Table.Join"z možnostjo"JoinKind.LeftOuter", pri čemer so rezultati združevanja predstavljeni v ugnezdeni in ne poenostavljeni obliki.


## Examples

### Example #1
Dodajte združeni stolpec v (\{\[saleID = 1, item = "Shirt"\], \[saleID = 2, item = "Hat"\]\}) z imenom"price/stock"iz tabele (\{\[saleID = 1, price = 20\], \[saleID = 2, price = 10\]\}), združene v \[saleID\].
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
