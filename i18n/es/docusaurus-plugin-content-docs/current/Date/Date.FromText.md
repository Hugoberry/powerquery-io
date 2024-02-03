---
title: Date.FromText
---

# Date.FromText


## Description

Crea una fecha a partir de formatos de fecha locales, universales y personalizados.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Details

Crea un valor <code>fecha</code> a partir de una representación textual, <code>text</code>. Un parámetro opcional <code>registro</code>, <code>options</code>, puede ser proporcionado para especificar propiedades adicionales. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Formato</code>: Un valor de <code>texto</code> que indica el formato a utilizar. Para más detalles, consulte https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105. Si se omite este campo o se proporciona <code>null</code>, se analizará la fecha utilizando el mayor esfuerzo.</li>   <li><code>Cultura</code>: Cuando <code>Formato</code> no es nulo, <code>Cultura</code> controla algunos especificadores de formato. Por ejemplo, en <code>"es-US"</code> <code>"MMM"</code> es <code>"Ene", "Feb", "Mar", ...</code>, mientras que en <code>"ru-RU"</code> <code>"MMM"</code> es <code>"янв", "фев", "мар", ...</code>. Cuando <code>Formato</code> es <code>nulo</code>, <code>Cultura</code> controla el formato por defecto a utilizar. Cuando <code>Cultura</code> es <code>nulo</code> o se omite, se utiliza <code>Cultura.Actual</code>.</li></ul>Para soportar los flujos de trabajo heredados, <code>options</code> también puede ser un valor de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Formato = nulo, Cultura = <code>options</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;&#34;2010-12-31&#34;&lt;/code&gt; en un valor &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2 
Convertir con un formato personalizado y la referencia cultural alemana.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3 
Busque la fecha en el calendario gregoriano que corresponde al principio de 1400 en el calendario Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```




## Category
Date
