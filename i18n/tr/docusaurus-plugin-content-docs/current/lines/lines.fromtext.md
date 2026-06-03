---
title: Lines.FromText
---

# Lines.FromText


Bir metin değerini, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Metin değerini satır sonları olarak bölünmüş metin değerleri listesine dönüştürür.

-   `text`: Metin değerleri listesine dönüştürülecek metin değeri.
-   `quoteStyle`: Satır sonlarını nasıl işleneceğini belirtir. `quoteStyle` değeri `null` olabilir. Varsayılan değer `QuoteStyle.None`.
-   `includeLineSeparators`: Metne satır sonu karakterlerinin eklenip eklenmeyeceğini belirtir. `includeLineSeparators` değeri `null` olabilir. Varsayılan değer false `.`.

`quoteStyle` için bir kayıt belirtilirse (ve `includeLineSeparators` `null` ise), aşağıdaki kayıt alanları sağlanabilir:

-   `QuoteStyle`: Alıntılanan satır sonlarının nasıl işleneceğini belirtir.
    -   `QuoteStyle.Csv`: Alıntılanan satır sonları geçerli satırın sonu olarak değil, verilerin bir parçası olarak değerlendirilir.
    -   `QuoteStyle.None` (varsayılan): Alıntılanan bir değer içerisinde yer alsalar bile tüm satır sonları, geçerli satırın sonu olarak değerlendirilir. `CsvStyle` seçeneği belirtilmezse bu değer varsayılandır.
-   `CsvStyle`: Tekliflerin nasıl işleneceğini belirtir. `QuoteStyle.None` ile birlikte kullanılmamalıdır.
    -   `CsvStyle.QuoteAfterDelimiter`: Bir alandaki alıntılar yalnızca `Sınırlayıcıdan` hemen sonra geliyorsa dikkate alınır.
    -   `CsvStyle.QuoteAlways`: Bir alandaki alıntılar, nerede göründüklerinden bağımsız olarak her zaman dikkate alınır.
-   `Sınırlayıcı`: Tek karakterli sınırlayıcı. Yalnızca `CsvStyle.QuoteAfterDelimiter` ile kullanılmalı.
-   `IncludeLineSeparators`: Metne satır sonu karakterlerinin eklenip eklenmeyeceğini belirtir. Varsayılan değer false `.`.



## Category
Lines
