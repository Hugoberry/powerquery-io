---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Zkombinuje určené sloupce do nového sloupce s hodnotou záznamů, kde každý záznam obsahuje názvy polí a hodnoty odpovídající názvům a hodnotám zkombinovaných sloupců


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Sloučí zadané sloupce `table` do nového sloupce se záznamy s názvem `newColumnName`, kde každý záznam obsahuje názvy a hodnoty polí odpovídající názvům a hodnotám sloučených sloupců. Pokud se pro `options` zadá záznam, můžete zadat následující možnosti:

-   `DisplayNameColumn`: Pokud se zadá jako text, znamená to, že se název daného sloupce bude považovat za zobrazovaný název záznamu. Nemusí se jednat o jeden ze sloupců v samotném záznamu.
-   `TypeName`: Pokud se zadá jako text, zastupuje pro výsledný záznam název logického typu, který se dá při načítání dat použít k řízení chování načítajícím prostředím.



## Category
Table.Transformation
