---
title: Table.FromColumns
---

# Table.FromColumns


## Description

Vytvoří tabulku ze seznamu sloupců a zadaných hodnot.


## Syntax

```powerquery
Table.FromColumns(
    lists as list,
    optional columns as any
) as table
```


## Details

Vytvoří ze seznamu <code>lists</code> tabulku typu <code>columns</code>, která obsahuje vnořené seznamy s názvy a hodnotami sloupců.    Pokud mají některé sloupce více hodnot než jiné, chybějící hodnoty budou zaplněny výchozí hodnotou null, pokud sloupce umožňují použití hodnoty null.


## Examples

### Example #1 
Vrátí tabulku ze seznamu názvů zákazníků v seznamu. Každá hodnota v seznamu zákazníků se stane hodnotou řádku a každý seznam hodnotou sloupce.
```powerquery
Table.FromColumns({
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = 1, Column2 = 2, Column3 = 3],
    [Column1 = "Bob", Column2 = "Jim", Column3 = "Paul"],
    [Column1 = "123-4567", Column2 = "987-6543", Column3 = "543-7890"]
})
```


### Example #2 
Vytvoří tabulku z daného seznamu sloupců a seznamu názvů sloupců.
```powerquery
Table.FromColumns(
    {
        {1, "Bob", "123-4567"},
        {2, "Jim", "987-6543"},
        {3, "Paul", "543-7890"}
    },
    {"CustomerID", "Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = 2, Phone = 3],
    [CustomerID = "Bob", Name = "Jim", Phone = "Paul"],
    [CustomerID = "123-4567", Name = "987-6543", Phone = "543-7890"]
})
```


### Example #3 
Vytvoří tabulku s různým počtem sloupců na řádek. Chybějící hodnota řádku je null.
```powerquery
Table.FromColumns(
    {
        {1, 2, 3},
        {4, 5},
        {6, 7, 8, 9}
    },
    {"column1", "column2", "column3"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [column1 = 1, column2 = 4, column3 = 6],
    [column1 = 2, column2 = 5, column3 = 7],
    [column1 = 3, column2 = null, column3 = 8],
    [column1 = null, column2 = null, column3 = 9]
})
```




## Category
Table.Table construction
