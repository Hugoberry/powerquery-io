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

Tworzy sprzężenie wierszy tabeli <code>table1</code> z wierszami tabeli <code>table2</code> na podstawie równości wartości kolumn klucza wybranych przez parametr <code>key1</code> (dla tabeli <code>table1</code>) i parametr <code>key2</code> (dla tabeli <code>table2</code>). Wyniki są umieszczane w kolumnie o nazwie <code>newColumnName</code>.<br />Opcjonalny parametr <code>joinKind</code> określa rodzaj tworzonego sprzężenia. Jeśli nie określono parametru <code>joinKind</code>, domyślnie jest tworzone lewe sprzężenie zewnętrzne.<br />Możesz dołączyć opcjonalny zestaw <code>keyEqualityComparers</code>, aby określić metodę porównania kolumn klucza. Ta funkcja jest obecnie przeznaczona tylko do użytku wewnętrznego.<br />  


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
