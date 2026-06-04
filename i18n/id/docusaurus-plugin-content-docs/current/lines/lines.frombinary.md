---
title: Lines.FromBinary
---

# Lines.FromBinary


Mengonversi nilai biner ke daftar nilai teks yang dibagi dengan garis pemisah. Jika gaya tanda petik ditetapkan, maka garis pemisah dapat ditampilkan dalam tanda petik. Jika includeLineSeparators benar, maka karakter garis pemisah disertakan dalam teks.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Mengonversi nilai biner ke daftar nilai teks yang dipisahkan pada hentian baris.

-   `binary`: Nilai biner yang akan dikonversi ke daftar.
-   `quoteStyle`: Menentukan cara penanganan hentian baris. Nilai `quoteStyle` dapat berupa `null`. Nilai defaultnya adalah `QuoteStyle.None`.
-   `includeLineSeparators`: Menentukan apakah akan menyertakan karakter hentian baris dalam teks. Nilai `includeLineSeparators` dapat berupa `null`. Nilai defaultnya adalah `false`.
-   `encoding`: Menentukan pengodean teks dari nilai biner. Nilai `encoding` dapat berupa `null`. Nilai defaultnya adalah `65001` (UTF-8).

Jika catatan ditentukan untuk `quoteStyle` (dan `includeLineSeparators` dan `encoding` berupa `null`), bidang catatan berikut dapat disediakan:

-   `QuoteStyle`: Menentukan bagaimana hentian baris dalam tanda kutip ditangani.
    -   `QuoteStyle.Csv`: Batas baris yang dikutip diperlakukan sebagai bagian dari data, bukan sebagai akhir dari baris saat ini.
    -   `QuoteStyle.None`: Semua hentian baris diperlakukan sebagai akhir dari baris saat ini, bahkan ketika hentian tersebut berada di dalam nilai yang diapit tanda kutip. Nilai ini adalah default jika opsi `CsvStyle` tidak ditentukan.
-   `CsvStyle`: Menentukan bagaimana tanda kutip ditangani. Tidak boleh digunakan dengan `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Tanda kutip dalam bidang hanya signifikan tepat setelah `Delimiter`.
    -   `CsvStyle.QuoteAlways`: Tanda kutip dalam bidang selalu signifikan, di mana pun posisinya.
-   `Delimiter`: Pemisah karakter tunggal. Harus digunakan hanya dengan `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Menentukan apakah akan menyertakan karakter hentian baris dalam teks. Nilai defaultnya adalah `false`.
-   `Encoding`: Pengodean teks pada nilai biner. Nilai defaultnya adalah `65001` (UTF-8).



## Category
Lines
