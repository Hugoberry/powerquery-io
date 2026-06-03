---
title: Table.NestedJoin
---

# Table.NestedJoin


Wykonuje sprzężenie tabel z użyciem określonych kolumn i umieszcza wynik sprzężenia w nowej kolumnie.


## Syntax

```powerquery
Table.NestedJoin(
    table1 as table,
    key1 as any,
    table2 as any,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional keyEqualityComparers as list
) as table
```


## Remarks

Tworzy sprzężenie wierszy tabeli `table1` z wierszami tabeli `table2` na podstawie równości wartości kolumn klucza wybranych przez parametr `key1` (dla tabeli `table1`) i parametr `key2` (dla tabeli `table2`). Wyniki są umieszczane w kolumnie o nazwie `newColumnName`.

Opcjonalny parametr `joinKind` określa rodzaj tworzonego sprzężenia. Jeśli nie określono parametru `joinKind`, domyślnie jest tworzone lewe sprzężenie zewnętrzne.

Możesz dołączyć opcjonalny zestaw `keyEqualityComparers`, aby określić metodę porównania kolumn klucza. Ta funkcja jest obecnie przeznaczona tylko do użytku wewnętrznego.


## Examples

### Example #1
Połącz dwie tabele przy użyciu jednej kolumny klucza.
```powerquery
Table.NestedJoin(
    Table.FromRecords({
        [CustomerToCall = 1],
        [CustomerToCall = 3]
    }),
    {"CustomerToCall"},
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {"CustomerID"},
    "CustomerDetails"
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerToCall = 1, CustomerDetails = Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})],
    [CustomerToCall = 3, CustomerDetails = Table.FromRecords({[CustomerID = 3, Name = "Paul", Phone = "543-7890"]})]
})
```




## Category
Table.Transformation
