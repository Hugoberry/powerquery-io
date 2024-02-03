---
title: Binary.FromText
---

# Binary.FromText


## Description

Dekodira podatke iz besedilne oblike v dvojiško vrednost.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vrne rezultat pretvorbe besedilne vrednosti <code>text</code> v dvojiško vrednost (seznam <code>number</code>). <code>encoding</code> je lahko določen, da kaže kodiranje, ki se uporabi v besedilni vrednosti.      Naslednje vrednosti <code>BinaryEncoding</code> se lahko uporabijo za <code>encoding</code>.      <ul>        <li><code>BinaryEncoding.Base64</code>: kodiranje Base 64</li>        <li><code>BinaryEncoding.Hex</code>: šestnajstiško kodiranje</li>      </ul>


## Examples

### Example #1 
Dekodirajte &#34;1011&#34; v dvojiško vrednost.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
Dekodirajte &#34;1011&#34; v dvojiško vrednost s šestnajstiškim kodiranjem.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
