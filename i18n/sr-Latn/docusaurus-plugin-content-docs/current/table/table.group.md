---
title: Table.Group
---

# Table.Group


Grupiše redove iz tabele koji imaju isti ključ.


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

Grupiše redove `table` prema ključnim kolonama definisanim u `key`. `key` može biti ime jedne kolone ili lista imena kolona. Za svaku grupu se pravi zapis koji sadrži ključne kolone (i njihove vrednosti), zajedno sa svim objedinjenim kolonama koje određuje `aggregatedColumns`. Opcionalno, mogu se takođe navesti `groupKind` i `comparer`.  
  
Ako su podaci već sortirani po ključnim kolonama, onda je moguće obezbediti `groupKind` usluge GroupKind. Može se obezbedti lokalno. Ovo može da poboljša performanse grupisanja u određenim slučajevima, jer se pretpostavlja da su svi redovi sa datim skupom ključnih vrednosti susedni.  
  
Prilikom prosleđivanja `comparer`, imajte na umu da ako različite ključeve tretira kao jednake, red će možda biti stavljen u grupu čiji se ključevi razlikuju od njegovog.  
  
Ova funkcija ne garantuje redosled redova koje vraća.


## Examples

### Example #1
Grupisanje tabele dodavanjem agregatne kolone \[ukupno\] koja sadrži zbir cena ("each List.Sum(\[price\])").
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
