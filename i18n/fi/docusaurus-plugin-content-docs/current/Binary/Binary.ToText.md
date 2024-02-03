---
title: Binary.ToText
---

# Binary.ToText


## Description

Koodaa binaaritiedot tekstimuotoon.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Palauttaa binaarilukuluettelon <code>binary</code> tekstiarvoksi muuntamisen tuloksen. Valinnaisesti <code>encoding</code> voidaan määrittää ilmaisemaan tuotetussa tekstiarvossa käytetty koodaus.      Seuraavia <code>BinaryEncoding</code>-arvoja voidaan käyttää kohteelle <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: Base 64 -koodaus</li>        <li><code>BinaryEncoding.Hex</code>: heksadesimaalikoodaus</li>      </ul>



## Category
Binary
