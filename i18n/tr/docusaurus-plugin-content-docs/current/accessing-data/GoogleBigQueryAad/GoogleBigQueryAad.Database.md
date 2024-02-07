---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Azure AD kullanarak bir Google BigQuery veritabanından verileri içe aktarın


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      <code>Faturalandırma Projesi Kimliği</code> için Azure AD kullanan Google BigQuery'deki kullanılabilir projeleri listeleyen bir tablo döndürür. Aşağıdaki seçenekleri kontrol etmek için isteğe bağlı bir kayıt parametresi olan <code>options</code> belirtilebilir:       <ul>        <li><code>ConnectionTimeout</code>: Sunucuyla bağlantı kurma girişiminden vazgeçmeden önce ne kadar bekleneceğini kontrol eden bir süre. Varsayılan değer ODBC Bağlantı Zaman Aşımı değeridir.</li>        <li><code>CommandTimeout</code>: Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar süreyle çalışmasına izin verileceğini kontrol eden bir süre.</li>        <li><code>UseStorageApi</code>: Büyük sonuç kümeleri için BigQuery Storage API'nin kullanılıp kullanılmayacağını belirtir. Depolama API'sini kullanmak için varsayılan değer true’dur. Depolama API'sini kullanmamak için false olarak ayarlayın</li>        <li><code>AudienceUri</code>: Bu, ODBC sürücüsünün belirteç değişim istekleri için kullanabileceği hedef kitle URI'sidir. Bu alan, tam bir URI (ör. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) olmalıdır; burada pool_id, işgücü havuzunu tanımlamak için genel olarak benzersiz bir addır.</li>      </ul>    Kayıt parametresi [seçenek1 = değer1, seçenek2 = değer2...] olarak belirtilir.    


## Examples

### Example #1 
Azure AD kullanarak Google BigQuery&#39;deki mevcut projeleri listeleyin
```powerquery
GoogleBigQueryAad.Database()
```



