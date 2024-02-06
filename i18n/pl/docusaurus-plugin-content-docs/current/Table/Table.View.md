---
title: Table.View
---

# Table.View


Tworzy lub rozszerza tabelę przy użyciu zdefiniowanych przez użytkownika procedur obsługi operacji zapytań i akcji.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Zwraca widok <code>table</code>, w którym funkcje określone w tabeli <code>handlers</code> są używane zamiast domyślnego zachowania operacji, gdy operacja jest stosowana do widoku.<br />Jeśli podano wartość <code>table</code>, wszystkie funkcje procedury obsługi są opcjonalne. Jeśli nie podano wartości <code>table</code>, wymagane będą funkcje procedury obsługi <code>GetType</code> i <code>GetRows</code>. Jeśli funkcja procedury obsługi nie jest określona w przypadku danej operacji, zamiast tego zostanie zastosowane zachowanie domyślne w odniesieniu do widoku <code>table</code> (z wyjątkiem operacji <code>GetExpression</code>).<br />Funkcje procedury obsługi muszą zwracać wartość semantycznie równoważną wynikowi zastosowania operacji w stosunku do widoku <code>table</code> (lub widoku wynikowego w przypadku operacji <code>GetExpression</code>).<br />Jeśli funkcja procedury obsługi zgłosi błąd, do widoku zostanie zastosowane domyślne zachowanie operacji.<br />Funkcji <code>Table.View</code> można użyć, aby wdrożyć składanie dla źródła danych (tłumaczenie zapytań M na zapytania specyficzne dla źródła, na przykład w celu tworzenia instrukcji akcji języka T-SQL z zapytań M).<br />Z bardziej kompleksowym opisem funkcji <code>Table.View</code> można zapoznać się w opublikowanej dokumentacji dotyczącej łącznika niestandardowego usługi Power Query.<br />


## Examples

### Example #1 
Utwórz widok podstawowy, który nie wymaga dostępu do wierszy w celu określenia typu lub liczby wierszy.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
