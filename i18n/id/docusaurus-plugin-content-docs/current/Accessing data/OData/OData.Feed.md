---
title: OData.Feed
---

# OData.Feed


## Description

Menghasilkan tabel feed OData yang diberikan oleh layanan OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Menghasilkan tabel umpan OData yang ditawarkan oleh layanan OData dari uri <code>serviceUri</code>, header <code>headers</code>. Nilai boolean yang menentukan apakah akan menggunakan koneksi serentak atau parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul>    <li><code>Kueri</code>: Menambahkan parameter kueri secara terprogram ke URL tanpa harus khawatir tentang pelongkapan. </li>    <li> <code>Header</code>: Menentukan nilai ini sebagai catatan akan memberikan header tambahan ke permintaan HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Menentukan nilai ini sebagai daftar akan mengecualikan kunci header HTTP ini agar tidak menjadi bagian dari penghitungan untuk menyimpan data.</li>    <li> <code>ApiKeyName</code> : Jika situs target memiliki gagasan kunci API, parameter ini dapat digunakan untuk menentukan nama (bukan nilai) parameter kunci yang harus digunakan dalam URL. Nilai kunci yang sebenarnya diberikan dalam kredensial.</li>    <li> <code>Batas Waktu</code>: Menentukan nilai ini sebagai durasi akan mengubah batas waktu untuk permintaan HTTP. Nilai defaultnya adalah 600 detik.</li>    <li> <code>EnableBatch</code> : Logika (true/false) yang mengatur apakah akan mengizinkan pembuatan permintaan $batch OData jika MaxUriLength terlampaui (defaultnya adalah false).</li>    <li> <code>MaxUriLength</code>: Angka yang menunjukkan panjang maksimum uri yang diperbolehkan untuk dikirim ke layanan OData. Jika terlampaui dan EnableBatch benar, permintaan akan dibuat ke titik akhir $batch OData, jika tidak, permintaan akan gagal (defaultnya adalah 2048).</li>    <li> <code>Concurrent</code> : Logika (true/false) bila diatur ke true, permintaan ke layanan akan dibuat secara serentak. Jika diatur ke false, permintaan akan dibuat secara berurutan. Jika tidak ditentukan, nilai akan ditentukan berdasarkan anotasi AsynchronousRequestsSupported layanan. Jika layanan tidak menentukan apakah AsynchronousRequestsSupported didukung, permintaan akan dibuat berurutan.</li>    <li> <code>ODataVersion</code> : Angka (3 atau 4) yang menentukan versi protokol OData yang akan digunakan untuk layanan OData ini. Jika tidak ditentukan, semua versi yang didukung akan diminta. Versi layanan akan ditentukan oleh header OData-Version yang dihasilkan oleh layanan.</li>    <li> <code>FunctionOverloads</code> : Logika (true/false) jika diatur ke true, overload impor fungsi akan dicantumkan di navigator sebagai entri terpisah, bila diatur ke false, overload impor fungsi akan dicantumkan sebagai satu fungsi gabungan di navigator. Nilai default untuk V3: false. Nilai default untuk V4: true.</li>    <li> <code>MoreColumns</code> : Logika (true/false) bila diatur ke true, akan menambahkan kolom "Kolom Lainnya" ke setiap umpan entitas yang berisi tipe terbuka dan tipe polimorfik. Ini akan berisi bidang yang tidak dicantumkan di tipe dasar. Jika false, bidang ini tidak ada. Default ke false.</li>    <li> <code>IncludeAnnotations</code>: Daftar nama istilah atau pola namespace yang memenuhi syarat dipisahkan dengan koma yang akan disertakan "\*" sebagai wildcard. Secara default, tidak ada anotasi yang disertakan.</li>    <li> <code>IncludeMetadataAnnotations</code> : Daftar nama istilah atau pola namespace yang memenuhi syarat yang dipisahkan dengan koma untuk disertakan di permintaan dokumen metadata "\*" sebagai wildcard. Secara default, menyertakan anotasi yang sama seperti IncludeAnnotations.</li>    <li> <code>OmitValues</code>: Mengizinkan layanan OData untuk menghindari menulis nilai tertentu dalam respons. Jika diakui oleh layanan, kami akan menyimpulkan nilai tersebut dari bidang yang dihilangkan. Opsinya meliputi:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Memungkinkan layanan OData untuk menghilangkan nilai null.</li>      </ul>    </li>    <li> <code>Implementasi</code>: Menentukan implementasi konektor OData yang akan digunakan. Nilai yang valid adalah "2.0" atau null.</li>    </ul>


## Examples

### Example #1 
Sambungkan ke layanan OData TripPin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
