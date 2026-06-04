---
title: Table.NestedJoin
---

# Table.NestedJoin


Spojí určené sloupce tabulek a vytvoří výsledek spojení v novém sloupci.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Spojí řádky tabulky `table1` s řádky tabulky `table2` na základě rovnosti hodnot klíčových sloupců vybraných funkcí `key1` (pro tabulku `table1`) a `key2` (pro tabulku `table2`). Výsledky jsou vloženy do sloupce `newColumnName`.

Volitelná hodnota `joinKind` určuje druh prováděného spojení. Pokud hodnota `joinKind` není zadaná, provede se ve výchozím nastavení levé vnější spojení.

Zahrnutá může být volitelná sada `keyEqualityComparers` pro určení způsobu porovnávání klíčových sloupců. Tato funkce je určená jenom pro interní použití.


## Examples

### Example #1
Spojit dvě tabulky pomocí jednoho klíčového sloupce
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
