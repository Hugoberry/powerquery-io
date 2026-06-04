---
title: Web.BrowserContents
---

# Web.BrowserContents


Mengembalikan HTML untuk URL yang ditentukan, seperti yang dilihat oleh pelayar web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Mengembalikan HTML untuk `url` yang ditentukan, seperti yang dilihat oleh pelayar web. Parameter rekod pilihan, `options`, boleh diberikan untuk menentukan sifat tambahan. Rekod tersebut boleh mengandungi medan berikut:

-   `ApiKeyName`: Jika laman sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci yang mesti digunakan dalam URL. Nilai kunci sebenar diberikan dalam kelayakan.
-   `WaitFor`: Menentukan syarat untuk menunggu sebelum memuat turun HTML, selain menunggu halaman dimuatkan (ini selalu dilakukan). Boleh jadi rekod yang mengandungi medan Tamat Masa dan/atau Pemilih. Jika hanya Tamat Masa ditentukan, fungsi akan menunggu jumlah masa yang ditentukan sebelum memuat turun HTML. Jika Pemilih dan Tamat Masa ditentukan, dan Tamat Masa berlalu sebelum Pemilih wujud pada halaman, ralat akan dipaparkan. Jika Pemilih ditentukan tanpa Tamat Masa, Tamat Masa lalai 30 saat digunakan.


## Examples

### Example #1
Mengembalikan HTML untuk https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Mengembalikan HTML untuk https://microsoft.com selepas menunggu pemilih CSS dipaparkan.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Mengembalikan HML untuk https://microsoft.com selepas menunggu sepuluh saat.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Mengembalikan HTML untuk https://microsoft.com selepas menunggu hingga sepuluh saat untuk pemilih CSS dipaparkan.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
