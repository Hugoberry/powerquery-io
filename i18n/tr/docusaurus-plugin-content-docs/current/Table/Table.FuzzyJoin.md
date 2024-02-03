---
title: Table.FuzzyJoin
---

# Table.FuzzyJoin


## Description

Verilen anahtarlara göre benzer öğeleri eşleşen iki tablodaki satırları birleştirir.


## Syntax

```powerquery
Table.FuzzyJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

<code>key1</code> (<code>table1</code> için) ve <code>key2</code> (<code>table2</code> için) tarafından seçilen anahtar sütunlarının değerlerinin benzer öğe eşleştirmesini temel alarak <code>table1</code> satırlarını <code>table2</code> satırlarıyla birleştirir.<br />Benzer öğe eşleştirme, metnin eşitliğinden daha çok benzerliğini temel alan bir karşılaştırmadır.<br />Varsayılan olarak bir iç birleşim gerçekleştirilir ancak birleşim türünü belirtmek için isteğe bağlı olarak bir <code>joinKind</code> eklenebilir. Seçenekler şunlardır:    <ul><li><code>JoinKind.Inner</code></li>
<li><code>JoinKind.LeftOuter</code></li>
<li><code>JoinKind.RightOuter</code></li>
<li><code>JoinKind.FullOuter</code></li>
<li><code>JoinKind.LeftAnti</code></li>
<li><code>JoinKind.RightAnti</code></li>
</ul><br />Anahtar sütunlarının nasıl karşılaştırılacağını belirtmek için isteğe bağlı olarak bir <code>joinOptions</code> kümesi eklenebilir. Seçenekler şunlardır:    <ul><li><code>ConcurrentRequests</code> : Benzer &#246;ğe eşleştirme i&#231;in kullanılacak paralel iş par&#231;acıklarının sayısını belirten, 1 ile 8 arasında bir sayı. Varsayılan değer 1&#39;dir.</li><li><code>Culture</code> : Kayıtları k&#252;lt&#252;re &#246;zg&#252; kurallara g&#246;re eşleştirmeye olanak tanır. Herhangi bir ge&#231;erli k&#252;lt&#252;r adı olabilir. &#214;rneğin, &quot;ja-JP&quot; K&#252;lt&#252;r se&#231;eneği, kayıtları Japon k&#252;lt&#252;r&#252;ne g&#246;re eşleştirir. Varsayılan değer: &quot;&quot;. Bu değer, kayıtları Sabit İngiliz k&#252;lt&#252;r&#252;ne g&#246;re eşleştirir.</li><li><code>IgnoreCase</code> : B&#252;y&#252;k/k&#252;&#231;&#252;k harfe duyarsız anahtar eşleştirmesine olanak tanıyan mantıksal (true/false) değer. &#214;rneğin, true olduğunda &quot;&#220;z&#252;mler&quot;, &quot;&#252;z&#252;mler&quot; ile eşleştirilir. Varsayılan değer true&#39;dur.</li><li><code>IgnoreSpace</code> : Eşleşmeleri bulmak i&#231;in metin par&#231;alarının birleştirilmesine olanak tanıyan mantıksal (true/false) değer. &#214;rneğin, true olduğunda &quot;&#220;z &#252;mler&quot; &quot;&#220;z&#252;mler&quot; ile eşleştirilir. Varsayılan değer true&#39;dur.</li><li><code>NumberOfMatches</code> : Her giriş satırı i&#231;in d&#246;nd&#252;r&#252;lebilecek maksimum eşleşen satır sayısını belirten tamsayı. &#214;rneğin 1 değeri, her giriş satırı i&#231;in en &#231;ok bir eşleşen satır d&#246;nd&#252;r&#252;r. Bu se&#231;enek sağlanmazsa eşleşen t&#252;m satırlar d&#246;nd&#252;r&#252;l&#252;r.</li><li><code>SimilarityColumnName</code> : Bir giriş değeri ile o giriş i&#231;in temsili değer arasındaki benzerliği g&#246;steren s&#252;tun adı. Varsayılan değer null&#39;dur, bu durumda benzerlikler i&#231;in yeni bir s&#252;tun eklenmeyecektir.</li><li><code>Threshold</code> : İki değerin eşleştirileceği benzerlik puanını belirten, 0,00 ile 1,00 arasında bir sayı.    &#214;rneğin, &quot;&#220;z&#252;mler&quot; ve &quot;&#220;z&#252;ler&quot; (&quot;m&quot; eksik), yalnızca bu se&#231;enek 0,90&#39;dan az olarak ayarlandıysa eşleştirilir.    1,00 eşiği, yalnızca tam eşleşmelere izin verir.    (Benzer bir &quot;tam eşleşmenin&quot; b&#252;y&#252;k/k&#252;&#231;&#252;k harf, s&#246;zc&#252;k sırası ve noktalama işaretleri gibi farklılıkları g&#246;rmezden gelebileceğini unutmayın.)     Varsayılan değer 0,80&#39;dir.</li><li><code>TransformationTable</code> : Kayıtları &#246;zel değer eşlemelerine g&#246;re eşleştirmeye olanak tanıyan tablo. &quot;Kaynak&quot; ve &quot;Hedef&quot; s&#252;tunlarını i&#231;ermelidir. &#214;rneğin, &quot;Kaynak&quot; s&#252;tununda &quot;&#220;z&#252;mler&quot;, &quot;Hedef&quot; s&#252;tununda &quot;Kuru &#252;z&#252;mler&quot; değerlerini i&#231;eren bir d&#246;n&#252;ş&#252;m tablosu sağlanmışsa &quot;&#220;z&#252;mler&quot;, &quot;Kuru &#252;z&#252;mler&quot; ile eşleştirilir. D&#246;n&#252;ş&#252;m&#252;n, d&#246;n&#252;ş&#252;m tablosundaki metnin t&#252;m oluşumlarına uygulanacağını unutmayın. Yukarıdaki d&#246;n&#252;ş&#252;m tablosu ile &quot;&#220;z&#252;mler tatlıdır&quot; c&#252;mlesi de &quot;Kuru &#252;z&#252;mler tatlıdır&quot; c&#252;mlesi ile eşleştirilir.</li></ul><br />    


## Examples

### Example #1 
[FirstName] temelinde iki tablonun sol iç benzer öğe birleşimi
```powerquery
Table.FuzzyJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 1,
			  FirstName2 = "Bob",
			  State = "TX"
		],
    [
			  CustomerID = 1,
			  FirstName1 = "Bob",
			  Phone = "555-1234",
			  CustomerStateID = 2,
			  FirstName2 = "bOB",
			  State = "CA"
		],
    [
			  CustomerID = 2,
			  FirstName1 = "Robert",
			  Phone = "555-4567",
			  CustomerStateID = null,
			  FirstName2 = null,
			  State = null
		]
})
```




## Category
Table.Transformation
