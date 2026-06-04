---
title: Binary.From
---

# Binary.From


Crea un binari a partir del valor donat


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Retorna un valor `binary` a partir del valor proporcionat, `value`. Si el valor `value` proporcionat és `null`, `Binary.From` retorna `null`. Si el valor `value` proporcionat és `binary`, es retorna `value`. Els valors dels tipus que s'indiquen a continuació es poden convertir en un valor `binary`:

-   `text`: un valor `binary` a partir de la representació de text. Consulteu `Binary.FromText` per obtenir més informació.

Si `value` és de qualsevol altre tipus, es retorna un error.


## Examples

### Example #1
Obté el valor `binary` de `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
