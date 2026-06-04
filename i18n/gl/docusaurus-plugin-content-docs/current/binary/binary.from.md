---
title: Binary.From
---

# Binary.From


Crea un binario a partir do valor indicado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devolve un valor `binary` a partir do `value` indicado. Se o valor `value` é `null`, `Binary.From` devolve `null`. Se o valor `value` é `binary`, devólvese `value`. Pódense converter a un valor `binary` os valores dos seguintes tipos:

-   `text`: un valor `binary` a partir da representación de texto. Consulta `Binary.FromText` para obter máis información.

Se `value` é de calquera outro tipo, devólvese un erro.


## Examples

### Example #1
Obter o valor `binary` de `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
