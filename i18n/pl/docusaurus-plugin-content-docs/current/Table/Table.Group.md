---
title: Table.Group
---

# Table.Group


Grupuje w tabeli wiersze, które mają taki sam klucz.


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

Grupuje wiersze <code>table</code> według kolumn klucza zdefiniowanych przez <code>key</code>. <code>key</code> może być nazwą pojedynczej kolumny lub listą nazw kolumn.    W przypadku każdej grupy tworzony jest rekord zawierający kolumny klucza (wraz z ich wartościami) oraz wszystkie zagregowane kolumny określone przez <code>aggregatedColumns</code>.    Opcjonalnie można również określić <code>groupKind</code> i <code>comparer</code>.<br />    <br />    Jeśli dane zostały już posortowane według kolumn klucza, wtedy można podać <code>groupKind</code> elementu GroupKind.Local. Może to poprawić wydajność grupowania w niektórych przypadkach,    ponieważ zakłada się, że wszystkie wiersze z danym zestawem wartości kluczy są sąsiadujące.<br />    <br />    Podczas przekazywania <code>comparer</code> zwróć uwagę, że jeśli traktuje zróżnicowane klucze jako równe, wiersz można umieścić w grupie, w której klucze różnią się od jej własnych.<br />    <br />    Ta funkcja nie gwarantuje porządkowania wierszy, które zwraca.  


## Examples

### Example #1 
Pogrupuj tabelę, dodając kolumnę agregacji [total], która zawiera sumę cen (&#34;each List.Sum([price])&#34;).
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
