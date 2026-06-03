---
title: Html.Table
---

# Html.Table


Belirtilen CSS seçicilerini sağlanan HTML'ye göre çalıştırmanın sonuçlarını içeren bir tablo döndürür.


## Syntax

```powerquery
Html.Table(
    html as any,
    columnNameSelectorPairs as list,
    optional options as record
) as table
```


## Remarks

Belirtilen CSS seçicisini verilen `html` öğesine karşı çalıştırmanın sonuçlarını içeren bir tablo döndürür. Ek özellikleri belirtmek için isteğe bağlı bir kayıt parametresi `options` sağlanabilir. Kayıt, aşağıdaki alanları içerebilir:

-   `RowSelector`


## Examples

### Example #1
Örnek bir html metin değerinden bir tablo döndürür.
```powerquery
Html.Table("<div class=""name"">Jo</div><span>Manager</span>", {{"Name", ".name"}, {"Title", "span"}}, [RowSelector=".name"])
```

Result: 
```powerquery
#table({"Name", "Title"}, {{"Jo", "Manager"}})
```


### Example #2
Bir örnek html metin değerinden tüm href'leri ayıklar.
```powerquery
Html.Table("<a href=""/test.html"">Test</a>", {{"Link", "a", each [Attributes][href]}})
```

Result: 
```powerquery
#table({"Link"}, {{"/test.html"}})
```




## Category
Accessing data
