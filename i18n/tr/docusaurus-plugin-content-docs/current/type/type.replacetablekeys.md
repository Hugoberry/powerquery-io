---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


Tüm anahtarlarının belirtilen anahtar listesi ile değiştirildiği yeni bir tablo döndürür.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Remarks

Tüm anahtarların belirtilen anahtar listesiyle değiştirilmesiyle yeni bir tablo türü döndürür.  
  
Her anahtar aşağıdaki formda bir kayıt kullanılarak tanımlanır:

-   `Columns`: anahtar adını tanımlayan sütun adlarının listesi
-   Anahtar tablonun birincil anahtarı ise, `Primary`: `true`; aksi halde, `false`

Belirtilen anahtar listesi, en fazla bir birincil anahtar tanımlandığından ve tüm anahtar sütun adlarının tablo türünde mevcut olduğundan emin olmak için doğrulanır.


## Examples

### Example #1
Tablo türündeki anahtar bilgilerini değiştirin.
```powerquery
let
    BaseType = type table [ID = number, FirstName = text, LastName = text],
    KeysAdded = Type.ReplaceTableKeys(
        BaseType,
        {
            [Columns = {"ID"}, Primary = true],
            [Columns = {"FirstName", "LastName"}, Primary = false]
        }
    ),
    DetailsOfKeys = Type.TableKeys(KeysAdded)
in
    DetailsOfKeys
```

Result: 
```powerquery
{
    [Columns = {"ID"}, Primary = true],
    [Columns = {"FirstName", "LastName"}, Primary = false]
}
```


### Example #2
Daha önce bir tablo türünde tanımlanan anahtar bilgilerini temizleyin.
```powerquery
let
    TypeWithKey = Type.AddTableKey(type table [ID = number, Name = text], {"ID"}, true),
    KeyRemoved = Type.ReplaceTableKeys(TypeWithKey, {}),
    DetailsOfKeys = Type.TableKeys(KeyRemoved)
in
    DetailsOfKeys
```

Result: 
```powerquery
{}
```




## Category
Type
