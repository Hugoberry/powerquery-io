---
title: Binary.From
---

# Binary.From


Crea un binario a partir del valor dado


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Devuelve un valor `binary` a partir del `value` especificado. Si el `value` especificado es `null`, `Binary.From` devuelve `null`. Si el `value` especificado es `binary`, se devuelve `value`. Los valores de los tipos siguientes se pueden convertir a un valor `binary`:

-   `text`: un valor `binary` a partir de la representación de texto. Para más información, vea `Binary.FromText`.

Si `value` es de cualquier otro tipo, se devuelve un error.


## Examples

### Example #1
Obtener el valor `binary` de `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
