---
title: Table.FromRecords
---

# Table.FromRecords


Konwertuje listę rekordów na tabelę.


## Syntax

```powerquery
Table.FromRecords(
    records as list,
    optional columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Konwertuje określoną listę rekordów na tabelę.

-   `records`: lista rekordów do przekonwertowania na tabelę.
-   `columns`: (opcjonalnie) lista nazw kolumn tabeli lub typu tabeli.
-   `missingField`: (opcjonalnie) określa sposób obsługi brakujących pól w wierszu. Użyj jednej z następujących wartości:
    -   `MissingField.Error`: wszystkie brakujące pola powodują wystąpienie błędu (wartość domyślna).
    -   `MissingField.UseNull`: brakujące pola są dołączane jako wartości `null`.
      
    Użycie `MissingField.Ignore` w tym parametrze powoduje wystąpienie błędu.


## Examples

### Example #1
Utwórz tabelę na podstawie rekordów, używając nazw pól rekordów jako nazw kolumn.
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```

Result: 
```powerquery
#table(type table[CustomerID = any, Name = any, Phone = any],
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
})
```


### Example #2
Utwórz tabelę na podstawie rekordów z typizowanymi kolumnami i wybierz liczbę kolumn.
```powerquery
Table.ColumnsOfType(
    Table.FromRecords(
        {[CustomerID = 1, Name = "Bob"]},
        type table[CustomerID = Number.Type, Name = Text.Type]
    ),
    {type number}
)
```

Result: 
```powerquery
{"CustomerID"}
```


### Example #3
Utwórz tabelę zawierającą imię, inicjał drugiego imienia i nazwisko klientów na podstawie określonych rekordów. Jeśli brakuje którejś wartości, zastąp ją wartością `null`.
```powerquery
Table.FromRecords({
        [CustomerID = 1, FirstName = "Bob", MiddleInitial = "C", LastName = "Smith"],
        [CustomerID = 2, FirstName = "Sarah", LastName = "Jones"],
        [CustomerID = 3, FirstName = "Harry", MiddleInitial = "H"]
    },
    type table [FirstName = nullable text, MiddleInitial = nullable text, LastName = nullable text],
    MissingField.UseNull)
```

Result: 
```powerquery
#table(type table[FirstName = text, MiddleInitial = text, LastName = text],
{
    {"Bob", "C", "Smith"},
    {"Sarah", null, "Jones"},
    {"Harry", "H", null}
})
```




## Category
Table.Table construction
