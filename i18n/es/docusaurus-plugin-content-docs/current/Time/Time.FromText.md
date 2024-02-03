---
title: Time.FromText
---

# Time.FromText


## Description

Crea una hora a partir de formatos de hora locales y universales y personalizados.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Crea un valor <code>time</code> a partir de una representación textual, <code>text</code>. Se puede proporcionar un parámetro opcional de <code>registro</code> <code>options</code> para especificar propiedades adicionales. El <code>registro</code> puede contener los siguientes campos:<ul>   <li><code>Format</code>: un valor de <code>texto</code> que indica el formato que se va a usar. Para obtener más información, vaya a https://go.microsoft.com/fwlink/?linkid=2180104 y https://go.microsoft.com/fwlink/?linkid=2180105 para obtener más detalles. Si se omite este campo o se proporciona <code>null</code>, se analizará la hora con el mejor esfuerzo.</li>   <li><code>Culture</code> : cuando <code>Format</code> no es null, <code>Culture</code> controla algunos especificadores de formato. Por ejemplo, en <code>"en-US"</code> <code>"tt"</code> es <code>"AM" o "PM"</code>, mientras que en <code>"ar-EG"</code> <code>"tt"</code> es <code>"ص" o "م"</code>. Cuando <code>Format</code> es <code>nulo</code>, <code>Culture</code> controla el formato predeterminado que se va a usar. Cuando <code>Culture</code> es <code>nulo</code> o se omite, se usa <code>Culture.Current</code>.</li></ul>Para admitir flujos de trabajo heredados, <code>options</code> también puede ser un valor de texto. Esto tiene el mismo comportamiento que si <code>options</code><code> = [Format = nulo, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertir &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; en un valor Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Convertir &lt;code&gt;&#34;1012&#34;&lt;/code&gt; en un valor de hora.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Convertir &lt;code&gt;&#34;10&#34;&lt;/code&gt; en un valor de hora.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
