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

Devolve um valor `binary` do fornecido `value`. Se o fornecido `value` for `null`, `Binary.From` devolve `null`. Se o fornecido `value` for `binary`, `value`é devolvido. Valores dos seguintes tipos podem ser convertidos para um valor `binary`:

-   `text`: Um valor `binary` da representação de texto.Consulte o `Binary.FromText` para detalhes.

Se `value` for de algum outro tipo, é devolvido um erro.


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
