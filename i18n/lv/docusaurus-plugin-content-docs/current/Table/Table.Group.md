---
title: Table.Group
---

# Table.Group


## Description

Rindas tiek grupētas tabulā, kam ir tāda pati atslēga.


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

Grupē vienuma <code>table</code> rindas pēc atslēgu kolonnām, kuras definētas ar <code>key</code>. <code>key</code> var būt gan vienas kolonnas nosaukums, gan kolonnu nosaukumu saraksts.    Katrai grupai tiek izveidots ieraksts, kas satur atslēgu kolonnas (un to vērtības), kā arī visas apkopotās kolonnas, kuras norāda <code>aggregatedColumns</code>.    Pēc izvēles var norādīt <code>groupKind</code> un <code>comparer</code>.<br />    <br />    Ja dati jau ir sakārtoti pēc atslēgu kolonnām, var norādīt GroupKind.Local <code>groupKind</code>. Tas dažos gadījumos var uzlabot grupēšanas veiktspēju,    tā kā tiek pieņemts, ka visas rindas ar noteiktu galveno vērtību kopumu ir blakus.<br />    <br />    Ievadot <code>comparer</code>, ņemiet vērā, ka, ja dažādus taustiņus uzskata par vienādiem, rindu var ievietot grupā, kuras atslēgas atšķiras no tās.<br />    <br />    Šī funkcija negarantē, ka tiek atgriezto rindu secība.  


## Examples

### Example #1 
Grupējiet tabulu, pievienojot apkopotu kolonnu [total], kurā ietverta cenu summa (&#34;each List.Sum([price])&#34;).
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
