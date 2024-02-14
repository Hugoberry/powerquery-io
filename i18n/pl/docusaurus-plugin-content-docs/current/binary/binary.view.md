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

Zwraca widok <code>binary</code>, w którym funkcje określone w <code>handlers</code> są używane zamiast domyślnego zachowania operacji, gdy operacja jest stosowana do widoku.<br />Jeśli podano wartość <code>binary</code>, wszystkie funkcje procedury obsługi są opcjonalne. Jeśli nie podano wartości <code>binary</code>, wymagana będzie funkcja procedury obsługi <code>GetStream</code>. Jeśli funkcja procedury obsługi nie jest określona w przypadku danej operacji, zamiast tego zostanie zastosowane zachowanie domyślne w odniesieniu do <code>binary</code> (z wyjątkiem operacji <code>GetExpression</code>).<br />Funkcje procedury obsługi muszą zwracać wartość semantycznie równoważną wynikowi zastosowania operacji w stosunku do widoku<code>binary</code> (lub widoku wynikowego w przypadku operacji <code>GetExpression</code>).<br />Jeśli funkcja procedury obsługi zgłosi błąd, do widoku zostanie zastosowane domyślne zachowanie operacji.<br />Funkcji <code>Binary.View</code> można użyć, aby wdrożyć składanie dla źródła danych (tłumaczenie zapytań M na operacje specyficzne dla źródła, na przykład w celu pobrania sekcji pliku).<br />Z bardziej kompleksowym opisem funkcji <code>Binary.View</code> można zapoznać się w opublikowanej dokumentacji dotyczącej łącznika niestandardowego usługi Power Query.<br />


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
