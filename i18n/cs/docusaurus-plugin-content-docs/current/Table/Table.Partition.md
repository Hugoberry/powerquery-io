---
title: Table.Partition
---

# Table.Partition


## Description

Rozdělí tabulku na seznam tabulek na základě zadaného počtu skupin a sloupců.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Details

Rozdělí tabulku <code>table</code> na seznam <code>groups</code> tabulek na základě hodnoty sloupce <code>column</code> a funkce <code>hash</code>.    Na hodnotu řádku <code>column</code> se použije funkce <code>hash</code> za účelem získání hodnoty hash řádku. Modulo hodnoty hash <code>groups</code> určí, do které z vrácených tabulek bude řádek umístěn.    <ul>       <li><code>table</code>: Tabulka, která má být rozdělena.</li>       <li><code>column</code>: Sloupec rozdělený podle algoritmu hash, který určuje, ve které vrácené tabulce se nachází řádek.</li>       <li><code>groups</code>: Počet tabulek, na které bude rozdělena vstupní tabulka.</li>       <li><code>hash</code>: Funkce použitá k získání hodnoty hash.</li>    </ul>  


## Examples

### Example #1 
Rozdělí tabulku &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; na dvě tabulky na sloupci [a] pomocí hodnoty sloupců jako funkce hash.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
