---
title: SapHana.Database
---

# SapHana.Database


SAP HANA veritabanındaki paketleri döndürür.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

`server` SAP HANA veritabanındaki çok boyutlu paketlere ilişkin bir tablo döndürür. `options`, isteğe bağlı bir kayıt parametresi olarak aşağıdaki seçenekleri denetlemek üzere belirtilebilir:

-   `Query` : Verileri almak için kullanılan yerel bir SQL sorgusu. Sorgu birden çok sonuç kümesi üretirse, yalnızca ilki döndürülür.
-   `Distribution` : Bağlantı dizesindeki "Distribution" özelliğinin değerini ayarlayan SapHanaDistribution. Deyim yönlendirme, deyim yürütme öncesinde dağıtılmış bir sistemin doğru sunucu düğümünü değerlendirme yöntemidir. Varsayılan değer SapHanaDistribution.All.
-   `Implementation` : Kullanılacak SAP HANA bağlayıcı uygulamasını belirtir.
-   `EnableColumnBinding` : Veri getirilirken değişkenleri bir SAP HANA sonuç kümesinin sütunlarına bağlar. Biraz daha yüksek bellek kullanımı pahasına performansı artırma olasılığı olabilir. Varsayılan değer yanlış’tır.
-   `ConnectionTimeout` : Sunucuyla bağlantı kurma denemesinden vazgeçilmeden önce ne kadar bekleneceğini denetleyen süre. Varsayılan değer 15 saniyedir.
-   `CommandTimeout` : Sunucu tarafı sorgusunun iptal edilmeden önce ne kadar çalıştırılmasına izin verildiğini denetleyen süre. Varsayılan değer on dakikadır.



## Category
Accessing data
