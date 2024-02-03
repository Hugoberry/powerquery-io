---
title: Binary.FromText
---

# Binary.FromText


## Description

Purkaa tietojen koodauksen tekstimuodosta binaariksi.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Palauttaa tekstiarvon <code>text</code> binaariksi muuntamisen tuloksen (<code>number</code>-luettelo). <code>encoding</code> voidaan määrittää ilmaisemaan tekstiarvossa käytetty koodaus.      Seuraavia <code>BinaryEncoding</code>-arvoja voidaan käyttää kohteelle <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 -koodaus</li>        <li><code>BinaryEncoding.Hex</code>: heksadesimaalikoodaus</li>      </ul>


## Examples

### Example #1 
Pura kohteen &#34;1011&#34; koodaus binaariksi.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Pura kohteen 1011 koodaus binaariksi käyttäen heksadesimaalikoodausta.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
