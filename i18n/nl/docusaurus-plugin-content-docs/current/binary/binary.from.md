---
title: Binary.From
---

# Binary.From


Maakt een binaire waarde van de opgegeven waarde


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Hiermee wordt een `binary`\-waarde geretourneerd van de opgegeven waarde `value`. Als de opgegeven waarde `value` `null` is, retourneert `Binary.From` `null`. Als de opgegeven waarde `value` `binary` is, wordt `value` geretourneerd. Waarden van de volgende typen kunnen worden omgezet naar een `binary`\-waarde:

-   `text`: een `binary`\-waarde van de tekstweergave. Raadpleeg `Binary.FromText` voor meer informatie.

Als `value` van een ander type is, wordt een fout geretourneerd.


## Examples

### Example #1
De `binary` waarde van `"1011"` ophalen.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
