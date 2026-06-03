---
title: Record.FromList
---

# Record.FromList


Verilen alan değeri listesi ve alan kümesinden bir kaydı döndürür.


## Syntax

```powerquery
Record.FromList(
    list as list,
    fields as any
) as record
```


## Remarks

Verilen alan değeri `list` öğesinden ve alan kümesinden bir kaydı döndürür. `fields` metin değeri listesi veya kayıt türü ile belirtilebilir. Alanlar benzersiz değilse bir hata oluşur.


## Examples

### Example #1
Bir alan değerleri listesinden ve alan adları listesinden kayıt oluşturur.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, {"CustomerID", "Name", "Phone"})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2
Bir alan değerleri listesinden ve kayıt türünden kayıt oluşturur.
```powerquery
Record.FromList({1, "Bob", "123-4567"}, type [CustomerID = number, Name = text, Phone = number])
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
