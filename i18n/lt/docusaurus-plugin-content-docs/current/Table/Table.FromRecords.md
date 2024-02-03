---
title: Table.FromRecords
---

# Table.FromRecords


## Description

Įrašų sąrašas konvertuojamas į lentelę.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>records</code> – įrašų sąrašas – konvertuojamas į lentelę.


## Examples

### Example #1 
Sukurkite lentelę iš įrašų, naudodami įrašo lauko pavadinimus kaip stulpelio pavadinimus.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```


### Example #2 
Sukurkite lentelę iš įrašų su įvestais stulpeliais ir pasirinkite stulpelių skaičių.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```




## Category
Table.Table construction
