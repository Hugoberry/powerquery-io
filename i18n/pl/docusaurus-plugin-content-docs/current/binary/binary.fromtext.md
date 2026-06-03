---
title: Binary.FromText
---

# Binary.FromText


Dekoduje dane w formie tekstowej na wartość binarną.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Zwraca wynik konwersji wartości tekstowej `text` na wartość binarną (lista wartości typu `number`). Parametr `encoding` można określić w celu wskazania kodowania używanego w wartości tekstowej. W parametrze `encoding` można użyć następujących wartości `BinaryEncoding`.

-   `BinaryEncoding.Base64`: kodowanie Base 64.
-   `BinaryEncoding.Hex`: kodowanie szesnastkowe.


## Examples

### Example #1
Zdekoduj wartość 1011 na wartość binarną.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Zdekoduj wartość 1011 na wartość binarną, używając kodowania szesnastkowego.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
