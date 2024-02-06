---
title: SharePoint.Tables
---

# SharePoint.Tables


Devuelve una tabla que incluye contenido de una lista de SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Devuelve una tabla que contiene una fila para cada elemento de lista encontrado en la lista de SharePoint especificada, <code>url</code>. Cada fila contiene las propiedades de la lista. Se puede especificar <code>options</code> para controlar las siguientes opciones:    <ul><li><code>ApiVersion</code> : Un n&#250;mero (14 o 15) o el texto &quot;Auto&quot; que especifica la versi&#243;n de la API de SharePoint que se usar&#225; para este sitio. Cuando no se especifica, se usa la versi&#243;n 14 de la API. Cuando se especifica Auto, la versi&#243;n del servidor se detectar&#225; autom&#225;ticamente si es posible; de lo contrario, se usar&#225; la versi&#243;n predeterminada 14. Los sitios de SharePoint que no est&#225;n en ingl&#233;s requieren al menos la versi&#243;n 15.</li><li><code>Implementation</code> : Opcional. Especifica la versi&#243;n del conector de SharePoint que se va a usar. Los valores aceptados son &quot;2.0&quot; o null. Si el valor es &quot;2.0&quot;, se usa la implementaci&#243;n&#160;2.0 del conector de SharePoint. Si el valor es null, se usa la implementaci&#243;n original del conector de SharePoint.</li><li><code>ViewMode</code> : Opcional. Esta opci&#243;n solo es v&#225;lida para la implementaci&#243;n&#160;2.0. Los valores aceptados son &quot;Todas&quot; y &quot;Predeterminado&quot;. Si no se especifica ning&#250;n valor, el valor se establece en &quot;Todas&quot;. Cuando se especifica &quot;Todas&quot;, la vista incluye todas las columnas creadas por el usuario y definidas por el sistema. Cuando se especifica &quot;Predeterminado&quot;, la vista coincidir&#225; con lo que el usuario vea al ver la lista en l&#237;nea en la vista que el usuario establezca como predeterminada en su configuraci&#243;n. Si el usuario edita la vista predeterminada para agregar o quitar columnas creadas por el usuario o definidas por el sistema, o al crear una nueva vista y establecerla como predeterminada, estos cambios se propagar&#225;n a trav&#233;s del conector.</li><li><code>DisableAppendNoteColumns</code> : Evita que el conector utilice un punto de conexi&#243;n independiente para las columnas de notas.</li></ul>    



## Category
Accessing data
