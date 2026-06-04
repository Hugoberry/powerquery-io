---
title: Table.TransformColumnNames
---

# Table.TransformColumnNames


Transformuje názvy sloupců pomocí příslušné funkce.


## Syntax

```powerquery
Table.TransformColumnNames(
    table as table,
    nameGenerator as function,
    optional options as record
) as table
```


## Remarks

Transformuje názvy sloupců pomocí příslušné funkce `nameGenerator`. Platné možnosti:

`MaxLength`: Určuje maximální délku nových názvů sloupců. Pokud je výsledkem funkce delší název sloupce, název se ořízne.

`Comparer`: Používá se k řízení porovnání při generování nových názvů sloupců. Porovnávače se dají použít k porovnávání bez rozlišování velikosti písmen nebo porovnávání s ohledem na jazykovou verzi a národní prostředí.

V jazyku vzorců jsou k dispozici následující předdefinované porovnávače:

-   `Comparer.Ordinal`: Používá se k provedení přesného porovnání ordinálů.
-   `Comparer.OrdinalIgnoreCase`: Používá se k provedení přesného porovnání ordinálů bez rozlišování velikosti písmen.
-   `Comparer.FromCulture`: Používá se k provedení porovnání s ohledem na jazykovou verzi a národní prostředí.


## Examples

### Example #1
Odebrat znak `#(tab)` z názvů sloupců
```powerquery
Table.TransformColumnNames(Table.FromRecords({[#"Col#(tab)umn" = 1]}), Text.Clean)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1]})
```


### Example #2
Převede názvy sloupců, aby se generovaly názvy bez rozlišování velikosti písmen o délce 6.
```powerquery
Table.TransformColumnNames(
    Table.FromRecords({[ColumnNum = 1, cOlumnnum = 2, coLumnNUM = 3]}),
    Text.Clean,
    [MaxLength = 6, Comparer = Comparer.OrdinalIgnoreCase]
)
```

Result: 
```powerquery
Table.FromRecords({[Column = 1, cOlum1 = 2, coLum2 = 3]})
```




## Category
Table.Column operations
