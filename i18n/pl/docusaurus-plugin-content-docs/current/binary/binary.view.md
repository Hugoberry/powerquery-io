---
title: Binary.View
---

# Binary.View


Tworzy lub rozszerza dane binarne przy użyciu zdefiniowanych przez użytkownika procedur obsługi operacji zapytań i akcji.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Zwraca widok `binary`, w którym funkcje określone w `handlers` są używane zamiast domyślnego zachowania operacji, gdy operacja jest stosowana do widoku.

Jeśli podano wartość `binary`, wszystkie funkcje procedury obsługi są opcjonalne. Jeśli nie podano wartości `binary`, wymagana będzie funkcja procedury obsługi `GetStream`. Jeśli funkcja procedury obsługi nie jest określona w przypadku danej operacji, zamiast tego zostanie zastosowane zachowanie domyślne w odniesieniu do `binary` (z wyjątkiem operacji `GetExpression`).

Funkcje procedury obsługi muszą zwracać wartość semantycznie równoważną wynikowi zastosowania operacji w stosunku do widoku`binary` (lub widoku wynikowego w przypadku operacji `GetExpression`).

Jeśli funkcja procedury obsługi zgłosi błąd, do widoku zostanie zastosowane domyślne zachowanie operacji.

Funkcji `Binary.View` można użyć, aby wdrożyć składanie dla źródła danych (tłumaczenie zapytań M na operacje specyficzne dla źródła, na przykład w celu pobrania sekcji pliku).

Z bardziej kompleksowym opisem funkcji `Binary.View` można zapoznać się w opublikowanej dokumentacji dotyczącej łącznika niestandardowego usługi Power Query.


## Examples

### Example #1
Utwórz widok podstawowy, który nie wymaga dostępu do danych w celu określenia długości wierszy.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
