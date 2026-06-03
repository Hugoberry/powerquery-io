---
title: AccessControlEntry.ConditionToIdentities
---

# AccessControlEntry.ConditionToIdentities


Koşulun kabul edeceği kimliklerin bir listesini döndürür.


## Syntax

```powerquery
AccessControlEntry.ConditionToIdentities(
    identityProvider as function,
    condition as function
) as list
```


## Remarks

Belirtilen `identityProvider` öğesini kullanarak `condition` öğesini kimlik listesine dönüştürür. Bu liste için `condition`, kimlik sağlayıcısı `identityProvider` olarak tüm yetkilendirme bağlamlarında `true` döndürür. `condition` öğesinin kimlik listesine dönüştürülmesi mümkün değilse, örneğin `condition` bir karar almak için kullanıcı veya grup kimliklerinden farklı özniteliklere danışıyorsa bir hata oluşur.

Kimlik listesinin, kimlikleri `condition` öğesinde göründüğü gibi temsil ettiğini ve kimliklerde normalleştirme (grup genişletme gibi) uygulanmadığını unutmayın.



## Category
Accessing data
