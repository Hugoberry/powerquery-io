---
title: Binary.From
---

# Binary.From


Iš nurodytos reikšmės sukuriama dvejetainė reikšmė


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Pateikiama `binary` reikšmė iš nurodytos `value` reikšmės. Jei nurodyta `value` reikšmė yra `null`, `Binary.From` pateikia `null`. Jei nurodyta `value` reikšmė yra `binary`, pateikiama `value`. Toliau nurodytų tipų reikšmės gali būti konvertuojamos į `binary` reikšmę.

-   `text`: `binary` reikšmė iš tekstinės pateikties. Išsamiau žr. `Binary.FromText`.

Jei `value` yra bet kokio kito tipo, pateikiama klaida.


## Examples

### Example #1
Gaukite `"1011"` `binary` reikšmę.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
