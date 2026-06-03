---
title: Lines.FromBinary
---

# Lines.FromBinary


İkili bir değeri, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. Alıntı stili belirtilirse alıntıların içinde satır sonları görünebilir. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

İkili değeri satır sonları olarak bölünmüş metin değerleri listesine dönüştürür.

-   `binary`: Dosyaya dönüştürülecek ikili değer.
-   `quoteStyle`: Satır sonlarını nasıl işleneceğini belirtir. `quoteStyle` değeri `null` olabilir. Varsayılan değer `QuoteStyle.None`.
-   `includeLineSeparators`: Metne satır sonu karakterlerinin eklenip eklenmeyeceğini belirtir. `includeLineSeparators` değeri `null` olabilir. Varsayılan değer false `.`.
-   `encoding`: İkili değerin metin kodlamasını belirtir. `encoding` değeri `null` olabilir. Varsayılan değer `65001` (UTF-8).

`quoteStyle` için bir kayıt belirtilirse (ve `includeLineSeparators` ve `encoding` `null` ise), aşağıdaki kayıt alanları sağlanabilir:

-   `QuoteStyle`: Alıntılanan satır sonlarının nasıl işleneceğini belirtir.
    -   `QuoteStyle.Csv`: Alıntılanan satır sonları geçerli satırın sonu olarak değil, verilerin bir parçası olarak değerlendirilir.
    -   `QuoteStyle.None` (varsayılan): Alıntılanan bir değer içerisinde yer alsalar bile tüm satır sonları, geçerli satırın sonu olarak değerlendirilir. `CsvStyle` seçeneği belirtilmezse bu değer varsayılandır.
-   `CsvStyle`: Tekliflerin nasıl işleneceğini belirtir. `QuoteStyle.None` ile birlikte kullanılmamalıdır.
    -   `CsvStyle.QuoteAfterDelimiter`: Bir alandaki alıntılar yalnızca `Sınırlayıcıdan` hemen sonra geliyorsa dikkate alınır.
    -   `CsvStyle.QuoteAlways`: Bir alandaki alıntılar, nerede göründüklerinden bağımsız olarak her zaman dikkate alınır.
-   `Sınırlayıcı`: Tek karakterli sınırlayıcı. Yalnızca `CsvStyle.QuoteAfterDelimiter` ile kullanılmalı.
-   `IncludeLineSeparators`: Metne satır sonu karakterlerinin eklenip eklenmeyeceğini belirtir. Varsayılan değer false `.`.
-   `Encoding`: Dosyanın ikili değer kodlaması. Varsayılan değer `65001` (UTF-8).



## Category
Lines
