---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Google BigQuery veritabanından verileri içeri aktarın.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Google BigQuery'deki mevcut projeleri listeleyen bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi (`options`) belirtilebilir:

-   `ConnectionTimeout`: Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer ODBC Bağlantı Zaman Aşımı değeridir.
-   `CommandTimeout`: İptal edilmeden önce sunucu tarafı sorgunun ne kadar süreyle çalıştırılmasına izin verildiğini denetleyen süre.
-   `BillingProject`: Faturalama projesi kimliği. Varsayılan değer ilk kullanılabilir projedir.
-   `UseStorageApi`: Büyük sonuç kümeleri için BigQuery Depolama API'sinin kullanılıp kullanılmayacağını belirtir. Depolama API'si kullanımı için varsayılan değer true'dur. Depolama API'sinin kullanılmaması için false olarak ayarlayın

Kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] şeklinde belirtilir.


## Examples

### Example #1
Google BigQuery'de kullanılabilen projeleri listeleyin
```powerquery
GoogleBigQuery.Database()
```



