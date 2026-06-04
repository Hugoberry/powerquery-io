---
title: OData.Feed
---

# OData.Feed


Mengembalikan jadual suapan OData yang ditawarkan oleh perkhidmatan OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Mengembalikan jadual suapan OData yang ditawarkan oleh perkhidmatan OData daripada uri `serviceUri`, pengepala `headers`. Nilai boolean yang menentukan sama ada hendak menggunakan sambungan serentak atau parameter rekod pilihan, `options`, boleh ditentukan untuk mengawal pilihan berikut:

-   `Query`: Tambahkan parameter pertanyaan secara programatik pada URL tanpa perlu risau tentang pelepasan.
-   `Headers`: Menentukan nilai ini sebagai rekod akan membekalkan pengepala tambahan kepada permintaan HTTP.
-   `ExcludedFromCacheKey`: Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk data cache.
-   `ApiKeyName`: Jika laman sasaran mempunyai tanggapan bagi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci yang mesti digunakan dalam URL. Nilai kunci sebenar diberikan dalam kelayakan.
-   `Timeout`: Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 600 saat.
-   `EnableBatch`: Logik (true/false) yang menetapkan sama ada untuk membenarkan penjanaan permintaan $batch OData jika MaxUriLength dilebihi (lalai ialah palsu).
-   `MaxUriLength`: Nombor yang menunjukkan panjang maksimum uri yang dibenarkan dihantar ke perkhidmatan OData. Jika melebihi had, dan EnableBatch ialah benar, maka permintaan akan dibuat kepada titik akhir $batch OData, jika tidak permintaan akan gagal (lalai ialah 2048).
-   `Concurrent`: Logik (benar/palsu) apabila ditetapkan kepada benar, permintaan kepada perkhidmatan akan dibuat serentak. Apabila ditetapkan kepada palsu, permintaan akan dibuat secara berurutan. Apabila tidak ditentukan, nilai akan ditentukan oleh anotasi AsynchronousRequestsSupported perkhidmatan. Jika perkhidmatan tidak menentukan sama ada AsynchronousRequestsSupported disokong, permintaan akan dibuat secara berurutan.
-   `ODataVersion`: Nombor (3 atau 4) yang menentukan versi protokol OData untuk digunakan bagi perkhidmatan OData ini. Apabila tidak ditentukan, semua versi yang disokong akan diminta. Versi perkhidmatan akan ditentukan oleh pengepala Versi-OData yang dikembalikan oleh perkhidmatan.
-   `FunctionOverloads`: Logik (true/false) apabila disetkan kepada benar, beban lebihan import fungsi akan disenaraikan dalam pengemudi sebagai entri berasingan, apabila disetkan kepada palsu, beban lebihan import fungsi akan disenaraikan sebagai satu fungsi kesatuan dalam pengemudi. Nilai lalai untuk V3: palsu. Nilai lalai untuk V4: benar.
-   `MoreColumns`: Logik (true/false) apabila disetkan kepada benar, menambah lajur "Lajur Lagi" pada setiap suapan entiti yang mengandungi jenis terbuka dan jenis polimorfik. Ini akan mengandungi medan yang tidak diisytiharkan dalam jenis asas. Apabila palsu, medan ini tiada. Lalai kepada palsu.
-   `IncludeAnnotations`: Senarai dipisahkan koma bagi nama istilah atau corak berkelayakan ruang nama untuk disertakan dengan "\*" sebagai kad bebas. Secara lalai, tiada anotasi disertakan.
-   `IncludeMetadataAnnotations`: Nama atau corak istilah layak ruang nama yang dipisahkan koma untuk disertakan pada permintaan dokumen metadata, dengan "\*" sebagai kad bebas. Secara lalai, menyertakan anotasi yang sama sebagai IncludeAnnotations.
-   `OmitValues`: Membenarkan perkhidmatan OData untuk mengelakkan penulisan nilai tertentu dalam respons. Jika diakui oleh perkhidmatan, kami akan mentaabir nilai tersebut daripada medan yang tidak dimasukkan. Pilihan merangkumi:
    -   `ODataOmitValues.Nulls`: Membenarkan perkhidmatan OData untuk mengabaikan nilai nol.
-   `Simpan`: Menentukan pelaksanaan penyambung OData untuk digunakan. Nilai yang sah ialah "2.0" atau nol.


## Examples

### Example #1
Sambung ke perkhidmatan OData Tripin.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
