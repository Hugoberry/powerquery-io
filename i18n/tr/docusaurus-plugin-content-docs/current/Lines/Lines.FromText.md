---
title: Lines.FromText
---

# Lines.FromText


## Description

Bir metin değerini, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as QuoteStyle.Type,
    optional includeLineSeparators as logical
) as list
```


## Details

Bir metin değerini, satır sonlarında bölünen bir metin değerleri listesine dönüştürür. includeLineSeparators true ise satır sonu karakterleri metne dahil edilir.        <div>          <ul>            <li><code>QuoteStyle.None:</code> (varsayılan) Tırnak işareti davranışı gerekli değildir.</li>            <li><code>QuoteStyle.Csv:</code> Tırnak işareti, Csv'ye dayalıdır. Çift tırnak karakteri, söz konusu bölümlerin ayrılması için kullanılır ve çift tırnak karakterleri çifti, söz konusu bölüm içindeki tek bir çift tırnak karakterinin belirtilmesi için kullanılır. </li>          </ul>        </div>    



## Category
Lines
