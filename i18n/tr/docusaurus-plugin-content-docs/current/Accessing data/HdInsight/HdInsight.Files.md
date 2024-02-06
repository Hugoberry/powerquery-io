---
title: HdInsight.Files
---

# HdInsight.Files


Bir Azure depolama kasasından belirtilen kapsayıcıda bulunan blobların özelliklerini ve içeriklerini barındıran bir tablo döndürür.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Azure depolama kasasından Azure depolama kasasından, <code>account</code>, kapsayıcı URL'sinde bulunan her bir blob için bir satır içeren gezinme tablosu döndürür. Her satır, dosyanın özelliklerini ve içeriğinin bir bağlantısını içerir.



## Category
Accessing data
