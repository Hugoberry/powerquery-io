---
title: Binary.ToText
---

# Binary.ToText


## Description

Binārus datus iekodē teksta formā.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Atgriež rezultātu bināru skaitļu saraksta <code>binary</code> pārvēršanai par teksta vērtību. Pēc izvēles var iekļaut vērtību <code>encoding</code>, lai norādītu kodējumu, ko izmantot izveidotajai teksta vērtībai      Vērtībai <code>encoding</code> var izmantot tālāk norādītās <code>BinaryEncoding</code> vērtības.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodējums Base 64</li>        <li><code>BinaryEncoding.Hex</code>: heksadecimālais kodējums</li>      </ul>



## Category
Binary
