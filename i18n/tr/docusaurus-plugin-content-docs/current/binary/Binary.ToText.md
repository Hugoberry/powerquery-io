---
title: Binary.ToText
---

# Binary.ToText


İkili verinin kodunu metin biçimi olarak çözer.


## Syntax

```powerquery
Binary.ToText(
    binary as binary,
    optional encoding as BinaryEncoding.Type
) as text
```


## Remarks

<code>binary</code> sayı ikili listesini dönüştürmenin sonucunu bir metin değerine döndürür. İsteğe bağlı olarak <code>encoding</code>, oluşturulan metin değerinde kullanılan kodlamayı göstermek için belirtilebilir.      Aşağıdaki <code>BinaryEncoding</code> değerleri, <code>encoding</code> için kullanılabilir.      <ul>        <li><code>BinaryEncoding.Base64</code>: 64 tabanlı kodlama</li>        <li><code>BinaryEncoding.Hex</code>: Onaltılık kodlama</li>      </ul>



## Category
Binary
