---
title: Date.ToText
---

# Date.ToText


Devuelve una representación de texto del valor de fecha.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Devuelve una representación textual de <code>date</code>. Un parámetro opcional <code>record</code>, <code>options</code>, puede ser proporcionado para especificar propiedades adicionales. <code>culture</code>solo se utiliza para los flujos de trabajo heredados. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Formato</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>nulo</code> la fecha será formateada utilizando el valor predeterminado definido por <code>Cultura</code>.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"es-US"</code> <code>"MMM"</code> es <code>"Ene", "Feb", "Mar", ...</code>, mientras que en <code>"ru-RU"</code> <code>"MMM"</code> es <code>"янв", "фев", "мар", ...</code>. Cuando <code>Formato</code> es <code>nulo</code>, <code>Cultura</code> controla el formato por defecto a utilizar. Cuando <code>Cultura</code> es <code>nulo</code> o se omite, se utiliza <code>Cultura.Actual</code>.</li></ul> Para soportar los flujos de trabajo heredados, <code>options</code> y <code>culture</code> también pueden ser valores de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = <code>options</code>, Cultura = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;#date(2010, 12, 31)&lt;/code&gt; en un valor &lt;code&gt;text&lt;/code&gt;. &lt;i&gt;La salida del resultado puede variar en función de la referencia cultural actual.&lt;/i&gt;
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2 
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3 
Busque el año en el calendario Hijri correspondiente al 1 de enero de 2000 en el calendario gregoriano.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
