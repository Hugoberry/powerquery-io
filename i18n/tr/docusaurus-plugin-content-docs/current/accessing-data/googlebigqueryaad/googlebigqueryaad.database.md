---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Microsoft Entra ID kullanarak bir Google BigQuery veritabanından verileri içeri aktarın


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

`Faturalama Projesi Kimliği` için Microsoft Entra ID kullanarak Google BigQuery'de kullanılabilir projelerin listelendiği bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi (`options`) belirtilebilir:

-   `ConnectionTimeout`: Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer ODBC Bağlantı Zaman Aşımı değeridir.
-   `CommandTimeout`: İptal edilmeden önce sunucu tarafı sorgunun ne kadar süreyle çalıştırılmasına izin verildiğini denetleyen süre.
-   `UseStorageApi`: Büyük sonuç kümeleri için BigQuery Depolama API'sinin kullanılıp kullanılmayacağını belirtir. Depolama API'si kullanımı için varsayılan değer true'dur. Depolama API'sinin kullanılmaması için false olarak ayarlayın
-   `AudienceUri`: Bu, ODBC sürücüsünün belirteç değişimi istekleri için kullanabileceği hedef kitle URI'sidir. Bu alan, tam nitelikli bir URI olmalıdır (ör. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), burada pool\_id, işgücü havuzunu tanımlamak için genel olarak benzersiz bir addır.

Kayıt parametresi \[seçenek1 = değer1, seçenek2 = değer2...\] şeklinde belirtilir.


## Examples

### Example #1
Microsoft Entra ID kullanarak Google BigQuery'deki mevcut projeleri listeleyin
```powerquery
GoogleBigQueryAad.Database()
```



