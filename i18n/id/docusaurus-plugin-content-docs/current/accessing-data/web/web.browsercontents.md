---
title: Web.BrowserContents
---

# Web.BrowserContents


Menghasilkan HTML untuk URL yang ditentukan, seperti yang dilihat oleh browser web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Menghasilkan HTML untuk `url` yang ditentukan, seperti yang terlihat pada browser web. Parameter catatan opsional, `options`, dapat diberikan untuk menentukan properti tambahan. Catatan dapat berisi bidang berikut:

-   `ApiKeyName`: Jika situs target memiliki konsep kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan di URL. Nilai kunci aktual diberikan di kredensial.
-   `WaitFor`: Menentukan kondisi untuk menunggu sebelum mengunduh HTML, selain menunggu halaman dimuat (yang selalu selesai diproses). Dapat berupa catatan yang berisi bidang Timeout dan/atau Selector. Fungsi akan menunggu selama jangka waktu yang ditetapkan sebelum mengunduh HTML hanya jika Timeout ditentukan. Jika Pemilih dan Waktu Habis ditentukan, dan Waktu Habis berlalu sebelum Pemilih ada di halaman, kesalahan akan muncul. Jika Selector ditentukan tanpa Timeout, Timeout default 30 detik akan diterapkan.


## Examples

### Example #1
Menghasilkan HTML untuk https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Menghasilkan HTML untuk https://microsoft.com setelah menunggu pemilih CSS muncul.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Menghasilkan HTML untuk https://microsoft.com setelah menunggu selama 10 detik.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Menghasilkan HTML untuk https://microsoft.com setelah menunggu selama 10 detik sampai pemilih CSS muncul.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
