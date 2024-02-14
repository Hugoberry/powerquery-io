---
title: Value.FromText
---

# Value.FromText


Bir metinsel gösterimden kesin türü belirtilmiş bir değer oluşturur.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Metinsel gösterimdeki (<code>text</code>) bir değerin kodunu çözer ve uygun türe sahip bir değer olarak yorumlar.    <code>Value.FromText</code> bir metin değeri alır ve sayı, mantıksal değer, null değeri, tarih saat değeri, süre değeri veya metin değeri döndürür. Boş metin değeri null değeri olarak değerlendirilir.    Ayrıca, isteğe bağlı bir <code>culture</code> sağlanabilir (ör. "tr-TR").



## Category
Text.Conversions from and to text
