---
title: Binary.From
---

# Binary.From


Ustvari dvojiško vrednost iz dane vrednosti


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Iz dane vrednosti `value` vrne vrednost `binary`. Če je dana vrednost `value` `null`, `Binary.From` vrne `null`. Če je dana vrednost `value` `binary`, je vrnjena vrednost `value`. V vrednost `binary` lahko pretvorite vrednosti teh vrst:

-   `text`: vrednost `binary` iz predstavitve v obliki besedila. Za podrobnosti glejte `Binary.FromText`.

Če je vrednost `value` katere koli druge vrste, je vrnjena napaka.


## Examples

### Example #1
Poiščite vrednost `binary` za `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
