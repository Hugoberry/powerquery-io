---
title: Table.Group
---

# Table.Group


## Description

Grupează rândurile din tabel care au aceeaşi cheie.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

Grupează rândurile de <code>table</code> după coloanele cheie definite de <code>key</code>. <code>key</code> poate fi un nume de coloană unic sau o listă de nume de coloane.    Pentru fiecare grup, este construită o înregistrare care conține coloanele cheie (și valorile lor), împreună cu toate coloanele agregate specificate de <code>aggregatedColumns</code>.    Opțional, <code>groupKind</code> și <code>comparer</code> pot fi, de asemenea, specificate. <br />    <br />    Dacă datele sunt sortate deja de coloanele cheie, se poate furniza un <code>groupKind</code> de tipul GroupKind.Local. Acest lucru poate îmbunătăți performanța grupării în anumite cazuri,    deoarece toate rândurile cu un set dat de valori cheie sunt considerate contigue. <br />    <br />    La trecerea unui <code>comparer</code>, rețineți că, dacă tratează chei diferite ca egale, un rând poate fi plasat într-un grup ale cărui chei diferă de ale sale. <br />    <br />    Această funcție nu garantează ordinea rândurilor returnate.  


## Examples

### Example #1 
Grupați tabelul adăugând o coloană de agregat [total], care conține suma prețurilor (&#34;each List.Sum([price])&#34;).
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
