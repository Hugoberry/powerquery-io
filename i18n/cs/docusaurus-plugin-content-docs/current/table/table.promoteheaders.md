---
title: Table.PromoteHeaders
---

# Table.PromoteHeaders


Zvýší úroveň prvního řádku hodnot na nová záhlaví sloupců (tj. názvy sloupců).


## Syntax

```powerquery
Table.PromoteHeaders(
    table as table,
    optional options as record
) as table
```


## Remarks

Zvýší úroveň prvního řádku hodnot na nová záhlaví sloupců (tj. názvy sloupců). Standardně se na záhlaví převedou jenom textové nebo číselné hodnoty. Platné možnosti:

-   `PromoteAllScalars`: Při nastavení na hodnotu `true` se převedou všechny skalární hodnoty v prvním řádku na záhlaví podle nastavení `Culture`, pokud je zadané (nebo podle národního prostředí aktuálního dokumentu). U hodnot, které se nedají převést na text, se použije výchozí název sloupce.
-   `Culture`: Název jazykové verze, který určuje jazykovou verzi dat.


## Examples

### Example #1
Umožňuje zvýšit úroveň prvního řádku hodnot v tabulce.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Column1 = "CustomerID", Column2 = "Name", Column3 = #date(1980, 1, 1)],
        [Column1 = 1, Column2 = "Bob", Column3 = #date(1980, 1, 1)]
    })
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Column3 = #date(1980, 1, 1)]})
```


### Example #2
Umožňuje zvýšit úroveň všech skalárních hodnot v prvním řádku tabulky na záhlaví.
```powerquery
Table.PromoteHeaders(
    Table.FromRecords({
        [Rank = 1, Name = "Name", Date = #date(1980, 1, 1)],
        [Rank = 1, Name = "Bob", Date = #date(1980, 1, 1)]}
    ),
    [PromoteAllScalars = true, Culture = "en-US"]
)
```

Result: 
```powerquery
Table.FromRecords({[1 = 1, Name = "Bob", #"1/1/1980" = #date(1980, 1, 1)]})
```




## Category
Table.Column operations
