---
title: Binary.ToText
---

# Binary.ToText


## Description

Kodira dvojiške podatke v besedilno obliko.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Details

Vrne rezultat pretvorbe dvojiškega seznama števil <code>binary</code> v besedilno vrednost. Izbirno se lahko določi <code>encoding</code>, da kaže kodiranje, ki naj se uporabi v ustvarjeni besedilni vrednosti      Naslednje vrednosti <code>BinaryEncoding</code> se lahko uporabijo za <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodiranje Base 64</li>        <li><code>BinaryEncoding.Hex</code>: šestnajstiško kodiranje</li>      </ul>



## Category
Binary
