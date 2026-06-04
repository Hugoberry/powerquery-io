---
title: Table.Group
---

# Table.Group


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


## Remarks

Grupē vienuma `table` rindas pēc atslēgu kolonnām, kuras definētas ar `key`. `key` var būt gan vienas kolonnas nosaukums, gan kolonnu nosaukumu saraksts. Katrai grupai tiek izveidots ieraksts, kas satur atslēgu kolonnas (un to vērtības), kā arī visas apkopotās kolonnas, kuras norāda `aggregatedColumns`. Pēc izvēles var norādīt `groupKind` un `comparer`.  
  
Ja dati jau ir sakārtoti pēc atslēgu kolonnām, var norādīt GroupKind.Local `groupKind`. Tas dažos gadījumos var uzlabot grupēšanas veiktspēju, tā kā tiek pieņemts, ka visas rindas ar noteiktu galveno vērtību kopumu ir blakus.  
  
Ievadot `comparer`, ņemiet vērā, ka, ja dažādus taustiņus uzskata par vienādiem, rindu var ievietot grupā, kuras atslēgas atšķiras no tās.  
  
Šī funkcija negarantē, ka tiek atgriezto rindu secība.


## Examples

### Example #1
Grupējiet tabulu, pievienojot apkopotu kolonnu \[total\], kurā ietverta cenu summa ("each List.Sum(\[price\])").
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
