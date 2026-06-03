---
title: Binary.From
---

# Binary.From


Tworzy wartość binarną na podstawie danej wartości.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Zwraca wartość typu `binary` z danej wartości parametru `value`. Jeśli dany parametr `value` ma wartość `null`, funkcja `Binary.From` zwraca wartość `null`. Jeśli dany parametr `value` ma wartość typu `binary`, zwracana jest wartość `value`. Na wartość typu `binary` można konwertować wartości następujących typów:

-   `text`: wartość typu `binary` z reprezentacji tekstowej. Zobacz opis funkcji `Binary.FromText`, aby uzyskać szczegółowe informacje.

Jeśli wartość parametru `value` jest innego typu, jest zwracany błąd.


## Examples

### Example #1
Pobierz wartość typu `binary` z wartości `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
