---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Bir PDF dosyasında bulunan tüm tabloları döndürür.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

<code>pdf</code> 'da bulunan tüm tabloları döndürür. Ek özellikleri belirtmek için isteğe bağlı bir kayıt parametresi <code>options</code> sağlanabilir. Kayıt aşağıdaki alanları içerebilir:    <ul><li><code>Implementation</code> : Tabloları tanımlarken kullanılacak algoritma s&#252;r&#252;m&#252;. Eski s&#252;r&#252;mler, algoritma g&#252;ncelleştirmelerinin eski sorguları bozmasını &#246;nlemek i&#231;in yalnızca geriye d&#246;n&#252;k uyumluluk i&#231;in kullanılabilir. En yeni s&#252;r&#252;m her zaman en iyi sonu&#231;ları vermelidir. Ge&#231;erli değerler: &quot;1.3&quot;, &quot;1.2&quot;, &quot;1.1&quot; veya null.</li><li><code>StartPage</code> : İncelenecek sayfalar arasından ilk sayfayı belirtir. Varsayılan: 1.</li><li><code>EndPage</code> : İncelenecek sayfalar arasından son sayfayı belirtir. Varsayılan: belgenin son sayfası.</li><li><code>MultiPageTables</code> : Art arda gelen sayfalardaki benzer tabloların otomatik olarak tek bir tabloda birleştirilip birleştirilmeyeceğini denetler. Varsayılan: true.</li><li><code>EnforceBorderLines</code> : Kenarlık &#231;izgilerinin her zaman h&#252;cre sınırı olarak zorunlu mu kılınacağını (true olduğunda), yoksa h&#252;cre sınırlarını belirlemek i&#231;in pek &#231;ok ipucundan biri olarak mı kullanılacağını (false olduğunda) denetler. Varsayılan: false.</li></ul>    


## Examples

### Example #1 
sample.pdf içinde yer alan tabloları döndürür.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"},...)
```




## Category
Verilere erişiliyor
