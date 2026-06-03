---
title: Type.TableKeys
---

# Type.TableKeys


Verilen tablo türü için boş olması muhtemel anahtar listesini döndürür.


## Syntax

```powerquery
Type.TableKeys(
    tableType as type
) as list
```


## Remarks

Verilen tablo türü için boş olması muhtemel anahtar listesini döndürür.  
  
Her anahtar aşağıdaki formda bir kayıt kullanılarak tanımlanır:

-   `Columns`: anahtar adını tanımlayan sütun adlarının listesi
-   Anahtar tablonun birincil anahtarı ise, `Primary`: `true`; aksi halde, `false`


## Examples

### Example #1
Tablo türü için anahtar bilgilerini döndür.
```powerquery
let
    BaseType = type table [ID = number, Name = text],
    AddKey = Type.AddTableKey(BaseType, {"ID"}, true),
    DetailsOfKeys = Type.TableKeys(AddKey)
in
    DetailsOfKeys
```

Result: 
```powerquery
{[Columns = {"ID"}, Primary = true]}
```




## Category
Type
