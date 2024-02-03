---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Sloučí zadané sloupce <code>table</code> do nového sloupce se záznamy s názvem <code>newColumnName</code>, kde každý záznam obsahuje názvy a hodnoty polí odpovídající názvům a hodnotám sloučených sloupců. Pokud se pro <code>options</code> zadá záznam, můžete zadat následující možnosti:     <ul>     <li> <code>DisplayNameColumn</code>: Pokud se zadá jako text, znamená to, že se název daného sloupce bude považovat za zobrazovaný název záznamu. Nemusí se jednat o jeden ze sloupců v samotném záznamu. </li>     <li> <code>TypeName</code>: Pokud se zadá jako text, zastupuje pro výsledný záznam název logického typu, který se dá při načítání dat použít k řízení chování načítajícím prostředím. </li>    </ul>    



## Category
Table.Transformation
