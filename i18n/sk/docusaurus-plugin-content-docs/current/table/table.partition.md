---
title: Table.Partition
---

# Table.Partition


Rozdelí tabuľku do zoznamu tabuliek na základe počtu skupín a zadaného stĺpca.


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

Rozdelí tabuľku `table` do zoznamu `groups` tabuliek na základe hodnoty `column` a funkcie `hash`. Funkcia `hash` sa použije na hodnotu riadka `column` s cieľom získať hodnotu hash pre príslušný riadok. Modulo hodnoty hash `groups` určí, do ktorej z vrátených tabuliek sa vloží riadok.

-   `table`: Tabuľka, ktorá sa má rozdeliť.
-   `column`: Stĺpec, ktorý má získať hodnotu hash, s cieľom určiť, v ktorej vrátenej tabuľke sa nachádza riadok.
-   `groups`: Počet tabuliek, do ktorých sa rozdelí vstupná tabuľka.
-   `hash`: Funkcia použitá na získanie hodnoty hash.


## Examples

### Example #1
Rozdeľte tabuľku `({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` do 2 tabuliek v stĺpci \[a\] použitím hodnoty stĺpcov ako funkcie hash.
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
