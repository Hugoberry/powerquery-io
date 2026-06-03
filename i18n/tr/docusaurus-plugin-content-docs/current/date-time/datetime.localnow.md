---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Yerel saat dilimindeki geçerli tarih ve saati döndürür.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

system.`geçerli tarih` saat olarak ayarlanmış bir tarih saat değeri döndürür.  
  
Bu işlevin döndürdüğü değer sorguyu yerel bir makinede mi yoksa çevrimiçi olarak mı çalıştırdığınıza bağlıdır. Örneğin, sorgunuz ABD Pasifik Saat diliminde bulunan bir sistemde çalıştırılıyorsa Power Query Masaüstü, yerel makinenize ayarlanmış tarih ve saati döndürür. Ancak sorgunuz bulutta çalıştırılıyorsa Power Query Online, bulut sanal makinelerde ayarlanmış utc olarak ayarlanmış saati okurken UTC saati döndürür.


## Examples

### Example #1
Masaüstünde çalışan yerel bir makinede bu Power Query çağır.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Bu işlevi Çevrimiçi olarak çalışan bulutta Power Query.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
