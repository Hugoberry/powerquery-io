---
title: Binary.FromText
---

# Binary.FromText


## Description

Duomenys dekoduojami iš teksto formos į dvejetainę formą.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Pateikiamas teksto reikšmės <code>text</code> konvertavimo į dvejetainę reikšmę rezultatas (<code>number</code> sąrašas). <code>encoding</code> gali būti nurodyta norint pateikti kodavimą, naudotą teksto reikšmėje.      Šias <code>BinaryEncoding</code> reikšmes galima naudoti <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodavimas „base 64“</li>        <li><code>BinaryEncoding.Hex</code>: šešioliktainis kodavimas</li>      </ul>


## Examples

### Example #1 
Dekoduoti &#34;1011&#34; į dvejetainę reikšmę.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Dekoduoti &#34;1011&#34; į dvejetainę reikšmę naudojant šešioliktainį kodavimą.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
