---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Menghasilkan tanggal dan waktu saat ini dalam zona waktu lokal.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Menghasilkan nilai `datetime` yang ditetapkan ke tanggal dan waktu saat ini pada system.  
  
Nilai yang dihasilkan oleh fungsi ini tergantung pada apakah Anda menjalankan kueri pada komputer lokal atau online. Misalnya, jika Anda menjalankan kueri pada sistem yang terletak di zona Waktu Pasifik A.S., Power Query Desktop mengembalikan tanggal dan waktu yang ditetapkan pada komputer lokal Anda. Namun, jika Anda menjalankan kueri di cloud, Power Query Online menghasilkan waktu UTC karena membaca waktu yang ditetapkan pada mesin virtual cloud, yang semuanya diatur ke UTC.


## Examples

### Example #1
Gunakan fungsi ini pada komputer lokal yang berjalan Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Gunakan fungsi ini di cloud yang berjalan Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
