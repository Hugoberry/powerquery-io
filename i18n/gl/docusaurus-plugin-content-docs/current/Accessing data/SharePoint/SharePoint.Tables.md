---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Devolve unha táboa co contido dunha lista de SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Devolve unha táboa que contén unha fila por cada elemento de lista localizado na lista de SharePoint especificada, <code>url</code>. Cada fila contén propiedades da lista. Pode especificarse <code>options</code> para controlar as seguintes opcións:    <ul><li><code>ApiVersion</code> : Un n&#250;mero (14 ou 15) ou o texto &quot;Auto&quot; que especifica a versi&#243;n da API de SharePoint que se debe usar para este sitio. Cando non se especifica, &#250;sase a versi&#243;n 14 da API. Cando se especifica Auto, a versi&#243;n do servidor det&#233;ctase automaticamente se &#233; posible; se non, establ&#233;cese na versi&#243;n predefinida 14. Os sitios de SharePoint que non est&#225;n en ingl&#233;s requiren polo menos a versi&#243;n 15.</li><li><code>Implementation</code> : Opcional. Especifica a versi&#243;n que hai que usar do conector de SharePoint. Os valores aceptados son “2.0” ou nulo. Se o valor &#233; “2.0”, usarase a implantaci&#243;n 2.0 do conector de SharePoint. Se o valor &#233; nulo, &#250;sase o despregamento orixinal do conector de SharePoint.</li><li><code>ViewMode</code> : Opcional. Esta opci&#243;n s&#243; &#233; v&#225;lida para a implantaci&#243;n 2.0. Os valores aceptados son “Todos&quot; e &quot;Predefinidos&quot;. Se non se especifica ning&#250;n valor, o valor establ&#233;cese en &quot;Todos&quot;. Cando se especifica &quot;Todos&quot;, a vista incl&#250;e todas as columnas creadas polo usuario e definidas polo sistema. Cando se especifique &quot;Default&quot;, a vista coincidir&#225; co que o usuario ve ao mirar a lista en li&#241;a na que vexa o usuario configurado como Predefinido na s&#250;a configuraci&#243;n. Se o usuario edita a s&#250;a vista predefinida para engadir ou eliminar as columnas creadas polo usuario ou definidas polo sistema, ou ben creando unha nova vista e configur&#225;ndoa como predeterminada, estes cambios propagaranse a trav&#233;s do conector.</li><li><code>DisableAppendNoteColumns</code> : Evita que o conector use un extremo separado para as columnas de notas.</li></ul>    



## Category
Accessing data
