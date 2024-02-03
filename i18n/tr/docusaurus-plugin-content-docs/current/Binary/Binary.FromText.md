---
title: Binary.FromText
---

# Binary.FromText


## Description

Bir metin biçimindeki verilerin kodunu ikili olarak çözer.


## Syntax

```powerquery
Binary.FromText(
    text as text,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

<code>text</code> metin değerini dönüştürmenin sonucunu bir ikiliye döndürür (<code>number</code> listesi). <code>encoding</code>, metin değerinde kullanılan kodlamayı göstermek için belirtilebilir.      Aşağıdaki <code>BinaryEncoding</code> değerleri, <code>encoding</code> için kullanılabilir.      <ul>        <li><code>BinaryEncoding.Base64</code>: 64 tabanlı kodlama</li>        <li><code>BinaryEncoding.Hex</code>: Onaltılık kodlama</li>      </ul>


## Examples

### Example #1 
&#34;1011&#34; değerinin kodunu ikili olarak çözer.
```powerquery
Binary.FromText("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```


### Example #2 
&#34;1011&#34; değerinin kodunu Onaltılık kodlama ile ikili olarak çözer.
```powerquery
Binary.FromText("1011", BinaryEncoding.Hex)
```

Result: 
```powerquery
Binary.FromText("EBE=", BinaryEncoding.Base64)
```




## Category
Binary
