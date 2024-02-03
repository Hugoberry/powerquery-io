---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Retorna el contingut del fitxer especificat des d&#39;un sistema de fitxers de l&#39;Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

Retorna el contingut del fitxer de l'adreça URL, <code>url</code>, des d'un sistema de fitxers de l'Azure Data Lake Storage. Es pot especificar el valor <code>options</code> per controlar les opcions següents:    <ul><li><code>BlockSize</code> : Nombre de bytes que s&#39;han de llegir abans d&#39;esperar el consumidor de dades. El valor per defecte &#233;s de 4&#160;MB.</li><li><code>RequestSize</code> : Nombre de bytes que cal intentar llegir en una sola sol&#183;licitud d&#39;HTTP al servidor. El valor per defecte &#233;s de 4&#160;MB.</li><li><code>ConcurrentRequests</code> : L&#39;opci&#243; ConcurrentRequests admet la desc&#224;rrega m&#233;s r&#224;pida de les dades mitjan&#231;ant l&#39;especificaci&#243; del nombre de sol&#183;licituds que es realitzaran en paral&#183;lel, amb el cost de l&#39;&#250;s de la mem&#242;ria. La mem&#242;ria necess&#224;ria &#233;s (ConcurrentRequest \* RequestSize). El valor per defecte &#233;s de 16.</li></ul>



## Category
Accessing data