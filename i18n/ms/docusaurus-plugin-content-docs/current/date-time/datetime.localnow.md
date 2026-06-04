---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Mengembalikan tarikh dan masa semasa dalam zon waktu tempatan.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Mengembalikan nilai `tarikh` yang disetkan kepada tarikh dan masa semasa pada system.  
  
Nilai yang dikembalikan oleh fungsi ini bergantung pada sama ada anda menjalankan pertanyaan anda pada mesin setempat atau dalam talian. Contohnya, jika anda menjalankan pertanyaan anda pada sistem yang terletak di zon Waktu Pasifik A.S., Power Query Desktop mengembalikan tarikh dan masa yang ditetapkan pada mesin setempat anda. Walau bagaimanapun, jika anda menjalankan pertanyaan anda di awan, Power Query Online mengembalikan masa UTC kerana ia membaca masa yang ditetapkan pada mesin maya awan, yang semuanya disetkan kepada UTC.


## Examples

### Example #1
Jalankan fungsi ini pada mesin setempat yang Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Jalankan fungsi ini pada awan yang sedang berjalan Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
