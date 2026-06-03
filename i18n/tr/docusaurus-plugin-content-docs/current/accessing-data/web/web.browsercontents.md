---
title: Web.BrowserContents
---

# Web.BrowserContents


Bir web tarayıcısı tarafından görüntülendiği şekliyle belirtilen URL için HTML'yi döndürür.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Belirtilen `url`için bir web tarayıcısı tarafından göründüğü haliyle HTML döndürür. İsteğe bağlı `options` kayıt parametresi, ek özellikleri belirtmek için sağlanabilir. Kayıt, şu alanları barındırabilir:

-   `ApiKeyName`: Hedef sitede bir API anahtarı gösterimi varsa, bu parametre URL'de kullanılması gereken anahtar parametresinin adını (değerini değil) belirtmek için kullanılabilir. Gerçek anahtar değeri kimlik bilgisinde sağlanır.
-   `WaitFor`: HTML'yi indirmeden önce sayfanın yüklenmesini beklemenin (her zaman yapılır) yanı sıra beklenecek bir koşul belirtir. Bu, Timeout ve/veya Selector alanları barındıran bir kayıt olabilir. Yalnızca Timeout belirtilirse işlev, HTML'yi indirmeden önce belirtilen süre boyunca bekler. Hem Seçici hem de Zaman Aşımı belirtilmişse ve Zaman Aşımı, Seçici sayfada bulunmadan önce sona ererse, bir hata oluşur. Timeout olmadan Selector belirtilirse, varsayılan olarak 30 saniyelik bir Timeout uygulanır.


## Examples

### Example #1
https://microsoft.com için HTML döndürür.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Bir CSS seçicisinin mevcut olması beklendikten sonra https://microsoft.com için HTML döndürür.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
On saniye bekledikten sonra https://microsoft.com için HTML döndürür.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
On saniyeye kadar bir CSS seçicisinin mevcut olması beklendikten sonra https://microsoft.com için HTML döndürür.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
