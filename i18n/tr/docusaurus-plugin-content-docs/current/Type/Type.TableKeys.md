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

Verilen tablo türü için boş olması muhtemel anahtar listesini döndürür.<br />    <br />    Her anahtar aşağıdaki formda bir kayıt kullanılarak tanımlanır:    <ul>      <li>        <code>Columns</code>: anahtar adını tanımlayan sütun adlarının listesi      </li>      <li>        Anahtar tablonun birincil anahtarı ise, <code>Primary</code>: <code>true</code>; aksi halde, <code>false</code>      </li>    </ul>    


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
