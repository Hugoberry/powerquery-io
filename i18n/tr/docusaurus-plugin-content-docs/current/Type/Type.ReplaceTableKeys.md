---
title: Type.ReplaceTableKeys
---

# Type.ReplaceTableKeys


## Description

Tüm anahtarlarının belirtilen anahtar listesi ile değiştirildiği yeni bir tablo döndürür.


## Syntax

```powerquery
Type.ReplaceTableKeys(
    tableType as type,
    keys as list
) as type
```


## Details

Tüm anahtarların belirtilen anahtar listesiyle değiştirilmesiyle yeni bir tablo türü döndürür.<br />    <br />    Her anahtar aşağıdaki formda bir kayıt kullanılarak tanımlanır:    <ul>      <li>        <code>Columns</code>: anahtar adını tanımlayan sütun adlarının listesi
      </li>      <li>        Anahtar tablonun birincil anahtarı ise, <code>Primary</code>: <code>true</code>; aksi halde, <code>false</code>      </li>    </ul>    Belirtilen anahtar listesi, en fazla bir birincil anahtar tanımlandığından ve tüm anahtar sütun adlarının tablo türünde mevcut olduğundan emin olmak için doğrulanır.    


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
