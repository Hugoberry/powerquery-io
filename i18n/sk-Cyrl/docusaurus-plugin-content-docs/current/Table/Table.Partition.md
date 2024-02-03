---
title: Table.Partition
---

# Table.Partition


## Description

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


## Details

Rozdelí tabuľku <code>table</code> do zoznamu <code>groups</code> tabuliek na základe hodnoty <code>column</code> a funkcie <code>hash</code>.    Funkcia <code>hash</code> sa použije na hodnotu riadka <code>column</code> s cieľom získať hodnotu hash pre príslušný riadok. Modulo hodnoty hash <code>groups</code> určí, do ktorej z vrátených tabuliek sa vloží riadok.    <ul>       <li><code>table</code>: Tabuľka, ktorá sa má rozdeliť.</li>       <li><code>column</code>: Stĺpec, ktorý má získať hodnotu hash, s cieľom určiť, v ktorej vrátenej tabuľke sa nachádza riadok.</li>       <li><code>groups</code>: Počet tabuliek, do ktorých sa rozdelí vstupná tabuľka.</li>       <li><code>hash</code>: Funkcia použitá na získanie hodnoty hash.</li>    </ul>  


## Examples

### Example #1 
Rozdeľte tabuľku &lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; do 2 tabuliek v stĺpci [a] použitím hodnoty stĺpcov ako funkcie hash.
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
