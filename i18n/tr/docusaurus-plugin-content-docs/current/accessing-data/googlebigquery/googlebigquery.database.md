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

      Google BigQuery'deki mevcut projeleri listeleyen bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi olan <code>options</code> belirtilebilir:        <ul>        <li><code>ConnectionTimeout</code>: Vazgeçmeden önce ne kadar bekleneceğini kontrol eden bir süre sunucuyla bağlantı kurma girişimi. Varsayılan değer ODBC Bağlantı Zaman Aşımı değeridir.</li>         <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışmasına izin verileceğini kontrol eden bir süre.</li>         <li><code>BillingProject</code>: Faturalandırma projesi kimliği. Varsayılan değer, kullanılabilen ilk projedir.</li>          <li><code>UseStorageApi</code>: Büyük sonuç kümeleri için BigQuery Storage API'nın kullanılıp kullanılmayacağını belirtir. Depolama API'sini kullanmak için varsayılan değer doğrudur. Depolama API'sini kullanmamak için false olarak ayarlayın</li>       </ul>     Kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] olarak belirtilir.    


## Examples

### Example #1 
Google BigQuery&#39;de kullanılabilen projeleri listeleyin
```powerquery
GoogleBigQuery.Database()
```



