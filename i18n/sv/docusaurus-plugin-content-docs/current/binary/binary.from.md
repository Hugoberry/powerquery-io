---
title: Binary.From
---

# Binary.From


Skapar ett binärvärde från det angivna värdet


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Returnerar ett `binary`\-värde från angiven `value`. Om `value` är `null` returnerar `Binary.From` `null`. Om `value` är `binary` returneras `value`. Värden av följande typer kan konverteras till ett `binary`\-värde:

-   `text`: Ett `binary`\-värde från textrepresentationen. Mer information finns under `Binary.FromText`.

Om `value` hör till en annan typ returneras ett fel.


## Examples

### Example #1
Hämta `binary`\-värdet för `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
