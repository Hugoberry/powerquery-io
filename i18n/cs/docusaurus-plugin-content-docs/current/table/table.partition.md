---
title: Table.Partition
---

# Table.Partition


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


## Remarks

Rozdělí tabulku `table` na seznam `groups` tabulek na základě hodnoty sloupce `column` a funkce `hash`. Na hodnotu řádku `column` se použije funkce `hash` za účelem získání hodnoty hash řádku. Modulo hodnoty hash `groups` určí, do které z vrácených tabulek bude řádek umístěn.

-   `table`: Tabulka, která má být rozdělena.
-   `column`: Sloupec rozdělený podle algoritmu hash, který určuje, ve které vrácené tabulce se nachází řádek.
-   `groups`: Počet tabulek, na které bude rozdělena vstupní tabulka.
-   `hash`: Funkce použitá k získání hodnoty hash.


## Examples

### Example #1
Rozdělí tabulku `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` na dvě tabulky na sloupci \[a\] pomocí hodnoty sloupců jako funkce hash.
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
