---
title: Binary.From
---

# Binary.From


Cria um binário a partir do valor especificado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retorna um valor `binary` com base no `value` especificado. Se o `value` especificado for `null`, `Binary.From` retornará `null`. Se o `value` especificado for `binary`, `value` será retornado. Os valores dos tipos a seguir podem ser convertidos em um valor `binary`:

-   `text`: um valor `binary` da representação de texto. Confira `Binary.FromText` para obter detalhes.

Se `value` for de qualquer outro tipo, um erro será retornado.


## Examples

### Example #1
Obtenha o valor `binary` de `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
