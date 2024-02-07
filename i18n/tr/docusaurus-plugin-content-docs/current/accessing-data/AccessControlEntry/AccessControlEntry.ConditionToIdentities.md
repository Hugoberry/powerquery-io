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

Belirtilen <code>identityProvider</code> öğesini kullanarak <code>condition</code> öğesini kimlik listesine dönüştürür. Bu liste için <code>condition</code>, kimlik sağlayıcısı <code>identityProvider</code> olarak tüm yetkilendirme bağlamlarında <code>true</code> döndürür. <code>condition</code> öğesinin kimlik listesine dönüştürülmesi mümkün değilse, örneğin <code>condition</code> bir karar almak için kullanıcı veya grup kimliklerinden farklı özniteliklere danışıyorsa bir hata oluşur.<br />    Kimlik listesinin, kimlikleri <code>condition</code> öğesinde göründüğü gibi temsil ettiğini ve kimliklerde normalleştirme (grup genişletme gibi) uygulanmadığını unutmayın.<br />



## Category
Accessing data
