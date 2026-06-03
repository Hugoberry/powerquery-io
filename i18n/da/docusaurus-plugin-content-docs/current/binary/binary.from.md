---
title: Binary.From
---

# Binary.From


Opretter en binær ud fra den angivne værdi


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerer en `binary` værdi fra den angivne `value`. Hvis den angivne `value` er `null`, returnerer `Binary.From` `null`. Hvis den angivne `value` er `binary`, returneres `value`. Værdier af følgende typer kan konverteres til en `binary` værdi:

-   `text`: En `binary` værdi fra tekstrepræsentationen. Se `Binary.FromText` for details.

Hvis `value` er af en anden type, returneres der en fejl.


## Examples

### Example #1
Hent `"1011"` for værdien `binary`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
