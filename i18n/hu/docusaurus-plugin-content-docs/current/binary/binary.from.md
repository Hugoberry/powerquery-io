---
title: Binary.From
---

# Binary.From


Bináris értéket hoz létre a megadott értékből.


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Egy `binary` típusú értéket ad vissza a megadott `value` értékből. Ha a megadott `value` érték `null`, a `Binary.From` függvény `null` értéket ad vissza. Ha a megadott `value` érték `binary`, a visszaadott érték `value`. A következő típusú értékek konvertálhatók `binary` értékre:

-   `text`: Egy `binary` érték a szöveges alakból. További részletek: `Binary.FromText`.

Ha a `value` más típusú, a függvény hibát ad vissza.


## Examples

### Example #1
Az `"1011"` `binary` típusú értékének lekérése
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
