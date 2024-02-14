---
title: Table.IsDistinct
---

# Table.IsDistinct


Wskazuje, czy tabela zawiera tylko unikatowe wiersze (bez duplikatów).


## Syntax

```powerquery
Table.IsDistinct(
    table as table,
    optional comparisonCriteria as any
) as logical
```


## Remarks

Wskazuje, czy tabela <code>table</code> zawiera tylko unikatowe wiersze (bez duplikatów). Zwraca wartość <code>true</code>, jeśli wiersze są unikatowe; w przeciwnym razie zwraca wartość <code>false</code>.    Opcjonalny parametr <code>comparisonCriteria</code> określa, które kolumny tabeli są sprawdzane pod kątem duplikatów. Jeśli nie określono parametru <code>comparisonCriteria</code>, sprawdzane są wszystkie kolumny.


## Examples

### Example #1 
Ustal, czy tabela zawiera tylko unikatowe wiersze.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
true
```


### Example #2 
Ustal, czy tabela zawiera tylko unikatowe wiersze w kolumnie.
```powerquery
Table.IsDistinct(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 5, Name = "Bob", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
