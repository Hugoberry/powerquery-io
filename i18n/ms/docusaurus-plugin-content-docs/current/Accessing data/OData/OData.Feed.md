---
title: OData.Feed
---

# OData.Feed


## Description

Mengembalikan jadual suapan OData yang ditawarkan oleh perkhidmatan OData.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Mengembalikan jadual suapan OData yang ditawarkan oleh perkhidmatan OData daripada uri <code>serviceUri</code>, pengepala <code>headers</code>. Nilai boolean yang menentukan sama ada hendak menggunakan sambungan serentak atau parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal pilihan berikut:    <ul>    <li><code>Query</code>: Tambahkan parameter pertanyaan secara programatik pada URL tanpa perlu risau tentang pelepasan. </li>    <li> <code>Headers</code> : Menentukan nilai ini sebagai rekod akan memberikan pengepala tambahan pada permintaan HTTP.</li>    <li> <code>ExcludedFromCacheKey</code>: Menentukan nilai ini sebagai senarai akan mengecualikan kunci pengepala HTTP ini daripada menjadi sebahagian daripada pengiraan untuk membuat cache data.</li>    <li> <code>ApiKeyName</code> : Jika laman sasaran mempunyai notasi kunci API, parameter ini boleh digunakan untuk menentukan nama (bukan nilai) bagi parameter kunci yang mesti digunakan dalam URL. Nilai kunci sebenar diberikan dalam kelayakan.</li>    <li> <code>Timeout</code> : Menentukan nilai ini sebagai tempoh akan mengubah tamat masa untuk permintaan HTTP. Nilai lalai ialah 600 saat.</li>    <li> <code>EnableBatch</code> : Logik (benar/palsu) yang menetapkan sama ada membenarkan penjanaan permintaan $batch OData jika panjang telah melebihi MaxUriLength (lalai ialah palsu).</li>    <li> <code>MaxUriLength</code> : Nombor yang menandakan panjang maksimum uri yang dibenarkan yang dihantar ke perkhidmatan OData. Jika melebihi had, dan EnableBatch ialah benar, maka permintaan akan dibuat kepada titik akhir $batch OData, jika tidak permintaan akan gagal (lalai ialah 2048).</li>    <li> <code>Concurrent</code> : Logik (benar/palsu) apabila ditetapkan kepada benar, permintaan kepada perkhidmatan akan dibuat secara serentak. Apabila ditetapkan kepada palsu, permintaan akan dibuat secara berurutan. Apabila tidak ditentukan, nilai akan ditentukan oleh anotasi AsynchronousRequestsSupported perkhidmatan. Jika perkhidmatan tidak menentukan sama ada AsynchronousRequestsSupported disokong, permintaan akan dibuat secara berurutan.</li>    <li> <code>ODataVersion</code> : Nombor (3 atau 4) yang menentukan versi protokol OData untuk digunakan bagi perkhidmatan OData ini. Apabila tidak ditentukan, semua versi yang disokong akan diminta. Versi perkhidmatan akan ditentukan oleh pengepala Versi-OData yang dikembalikan oleh perkhidmatan.</li>    <li> <code>FunctionOverloads</code> : Logik (benar/palsu) apabila ditetapkan kepada benar, beban lebihan import fungsi akan disenaraikan dalam pengemudi sebagai entri berasingan, apabila ditetapkan kepada palsu, beban lebihan import fungsi akan disenaraikan sebagai satu fungsi gabungan dalam pengemudi. Nilai lalai untuk V3: palsu. Nilai lalai untuk V4: benar.</li>    <li> <code>MoreColumns</code> : Logik (benar/palsu) apabila ditetapkan kepada benar, menambahkan lajur "Lebih Banyak Lajur" pada setiap suapan entiti yang mengandungi jenis terbuka dan jenis polimorf. Ini akan mengandungi medan yang tidak diisytiharkan dalam jenis asas. Apabila palsu, medan ini tiada. Lalai kepada palsu.</li>    <li> <code>IncludeAnnotations</code> : Senarai dipisahkan koma bagi ruang nama bagi nama atau corak istilah yang layak untuk disertakan dengan "\*" sebagai kad bebas. Secara lalai, tiada anotasi disertakan.</li>    <li> <code>IncludeMetadataAnnotations</code> : Senarai dipisahkan koma bagi ruang nama bagi nama atau corak istilah yang layak untuk disertakan pada permintaan dokumen metadata, dengan "\*" sebagai kad bebas. Secara lalai, menyertakan anotasi yang sama sebagai IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Membenarkan perkhidmatan OData mengelak daripada menulis nilai tertentu dalam respons. Jika diakui oleh perkhidmatan, kami akan mentaabir nilai tersebut daripada medan yang tidak dimasukkan. Pilihan merangkumi:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Membenarkan perkhidmatan OData untuk tidak memasukkan nilai nol.</li>      </ul>    </li>    <li> <code>Implementation</code> : Menentukan pelaksanaan penyambung OData untuk digunakan. Nilai yang sah ialah "2.0" atau nol.</li>    </ul>


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
