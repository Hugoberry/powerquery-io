---
title: Value.FromText
---

# Value.FromText


Bir metinsel gösterimden kesin türü belirtilmiş bir değer oluşturur.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Remarks

Metinsel bir gösterimden bir değeri çözer ve onu uygun türde bir değer olarak yorumlar.

-   `text`: Yorumlanacak metin.
-   `culture`: : (İsteğe bağlı) Metni yorumlamak için kullanılan belirli bir kültür (örneğin, "en-US").

Bu işlev bir metin değeri alır ve `sayı`, `mantıksal`, `null`, `tarih saat`, `süre` veya `metin` türünde bir değer döndürür. Boş bir metin değeri, `null` olarak yorumlanır.


## Examples

### Example #1
Bir sayıyı temsil eden metni, ona karşılık gelen sayı değerine dönüştür.
```powerquery
Value.FromText("12345.6789")
```

Result: 
```powerquery
12345.6789
```


### Example #2
Yüzdeyi temsil eden metni, karşılık gelen sayı değerine dönüştür.
```powerquery
Value.FromText("25.4%")
```

Result: 
```powerquery
0.254
```


### Example #3
Fransız Euro değerini temsil eden metni, karşılık gelen sayı değerine dönüştür.
```powerquery
Value.FromText("€1,190", "fr-FR")
```

Result: 
```powerquery
1.19
```


### Example #4
Almanca tarih ve saati temsil eden metni karşılık gelen tarih ve saat değerine dönüştür.
```powerquery
Value.FromText("24 Dez 2024 14:33:20", "de-DE")
```

Result: 
```powerquery
#datetime(2024, 12, 24, 14, 33, 20)
```




## Category
Text.Conversions from and to text
