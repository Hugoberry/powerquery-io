---
title: Binary.FromText
---

# Binary.FromText


Duomenys dekoduojami iš teksto formos į dvejetainę formą.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Pateikiamas teksto reikšmės `text` konvertavimo į dvejetainę reikšmę rezultatas (`number` sąrašas). `encoding` gali būti nurodyta norint pateikti kodavimą, naudotą teksto reikšmėje. Šias `BinaryEncoding` reikšmes galima naudoti `encoding`.

-   `BinaryEncoding.Base64`: kodavimas „base 64“
-   `BinaryEncoding.Hex`: šešioliktainis kodavimas


## Examples

### Example #1
Dekoduoti "1011" į dvejetainę reikšmę.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2
Dekoduoti "1011" į dvejetainę reikšmę naudojant šešioliktainį kodavimą.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
