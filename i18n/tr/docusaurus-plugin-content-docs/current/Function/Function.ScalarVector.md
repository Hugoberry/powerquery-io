---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Vektör işlevin üzerinde skaler bir işlev oluşturarak birden fazla çağrı grubu oluşturur.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Tek sıra bağımsız değişkenler ile <code>vectorFunction</code> çağıran ve bunun tekli çıkışını döndüren <code>scalarFunctionType</code> türü bir skaler işlev döndürür. Buna ek olarak, bir skaler işlev Table.AddColumn gibi bir giriş tablosunda tekrar tekrar uygulandığında tüm girişlerin yerine bir kez <code>vectorFunction</code> uygulanır.<br /> Sütunlarının adları eşleşen ve <code>scalarFunctionType</code> parametrelerini konumlandıran bir tablo, <code>vectorFunction</code> öğesine geçirilir. Bu tablodaki her bir satır, skaler işleve bir çağrı için bağımsız değişkenler barındırır ve sütunlar <code>scalarFunctionType</code> parametrelerine karşılık gelir.<br /><code>vectorFunction</code>, giriş tablosuyla aynı uzunlukta olan bir liste döndürmelidir. Bu listede tüm konumlardaki öğeler, giriş tablosunda aynı konumda bulunan satırın skaler işlevinin değerlendirme sonucuna karşılık gelmelidir.<br />Giriş tablosunun akışla içeri aktarılması beklenir, bu nedenle <code>vectorFunction</code> öğesinin de tek seferde yalnızca bir giriş öbeğiyle çalışarak giriş akışla aktarıldıkça çıkışını akışla aktarması beklenir. <code>vectorFunction</code> öğesinin giriş tablosunu bir kereden fazla sıralamaması özellikle önemlidir.<br />



## Category
Function
